import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  bookingId: string;
  status: string;
  message?: string;
}

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
const resendApiKey = Deno.env.get("RESEND_API_KEY");

if (!supabaseUrl || !supabaseAnonKey || !resendApiKey) {
  throw new Error("Missing required environment variables (SUPABASE_URL, SUPABASE_ANON_KEY, RESEND_API_KEY)");
}

const resend = new Resend(resendApiKey);

const getEmailTemplate = (status: string, bookingDetails: any, message?: string) => {
  let subject = '';
  let content = '';

  switch (status) {
    case 'pending':
      subject = 'Your Booking Request Has Been Received';
      content = `<h2>Thank you, ${bookingDetails.name}!</h2>
                 <p>We received your ${bookingDetails.event_type} booking request for ${bookingDetails.event_date || 'your selected date'}.</p>
                 <p>We’ll get back to you shortly.</p>
                 <p>Booking ID: ${bookingDetails.id}</p>`;
      break;
    case 'accepted':
      subject = 'Your Booking Has Been Confirmed';
      content = `<h2>Great news, ${bookingDetails.name}!</h2>
                 <p>Your ${bookingDetails.event_type} booking is confirmed.</p>
                 <p>Date: ${bookingDetails.event_date}</p>
                 <p>Booking ID: ${bookingDetails.id}</p>`;
      break;
    case 'declined':
      subject = 'Your Booking Request Was Declined';
      content = `<h2>Hello ${bookingDetails.name},</h2>
                 <p>We’re sorry we can’t accommodate your ${bookingDetails.event_type} booking at this time.</p>
                 ${message ? `<p>Reason: ${message}</p>` : ''}
                 <p>Booking ID: ${bookingDetails.id}</p>`;
      break;
    case 'cancelled':
      subject = 'Your Booking Has Been Cancelled';
      content = `<h2>Hello ${bookingDetails.name},</h2>
                 <p>Your booking for ${bookingDetails.event_type} has been cancelled.</p>
                 ${message ? `<p>Reason: ${message}</p>` : ''}
                 <p>Booking ID: ${bookingDetails.id}</p>`;
      break;
    default:
      subject = 'Update on Your Booking';
      content = `<h2>Hello ${bookingDetails.name},</h2>
                 <p>Your booking status has been updated to: ${status}</p>
                 <p>Booking ID: ${bookingDetails.id}</p>`;
  }

  return {
    subject,
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          ${content}
          <hr>
          <small>This is an automated message. Please do not reply.</small>
        </body>
      </html>
    `
  };
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const body: NotificationRequest = await req.json();

    console.log("Received request body:", body);

    if (!body.bookingId || !body.status) {
      return new Response(JSON.stringify({ error: "Missing required fields: bookingId and status" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: booking, error: bookingError } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", body.bookingId)
      .single();

    if (bookingError || !booking) {
      console.error("Booking lookup error:", bookingError);
      return new Response(JSON.stringify({ error: `Booking not found or error: ${bookingError?.message}` }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { subject, html } = getEmailTemplate(body.status, booking, body.message);

    try {
      const emailResult = await resend.emails.send({
        from: "Luminous Events <no-reply@yourdomain.com>", // UPDATE with your verified sender
        to: booking.email,
        subject,
        html,
      });

      console.log("Email API result:", emailResult);

      return new Response(JSON.stringify({
        status: "success",
        recipient: booking.email,
        bookingId: booking.id,
        notificationType: body.status,
        sentAt: new Date().toISOString(),
      }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      return new Response(JSON.stringify({ error: "Failed to send email", details: emailError }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Function error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : String(error) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
