
export type Booking = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  event_type: string;
  event_date?: string;
  guest_count?: number;
  message?: string;
  status: 'pending' | 'accepted' | 'declined' | 'cancelled';
  created_at: string;
  updated_at: string;
};

export type Admin = {
  id: string;
  email: string;
  created_at: string;
};

export type BookingFilter = {
  status: string;
  dateRange: { from: Date | undefined; to: Date | undefined };
};
