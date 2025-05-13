
import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { FilterBar } from '@/components/admin/FilterBar';
import { BookingTable } from '@/components/admin/BookingTable';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Booking, BookingFilter } from '@/types';
import { isBefore, isAfter, parseISO } from 'date-fns';

const Dashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchBookings();

    // Set up realtime subscription
    const channel = supabase
      .channel('bookings-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'bookings' },
        () => {
          fetchBookings();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setBookings(data as Booking[]);
      setFilteredBookings(data as Booking[]);
    } catch (error: any) {
      console.error('Error fetching bookings:', error);
      toast({
        title: 'Error',
        description: 'Could not load bookings. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: 'accepted' | 'declined' | 'cancelled', message?: string) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      
      // Send notification (this would be implemented with an Edge Function)
      try {
        await supabase.functions.invoke('send-booking-notification', {
          body: { bookingId: id, status, message },
        });
      } catch (notificationError) {
        console.error('Error sending notification:', notificationError);
        // Non-fatal error, we won't throw it
      }

      toast({
        title: 'Status Updated',
        description: `Booking has been ${status}.`,
      });

      // Update local state
      setBookings(prevBookings =>
        prevBookings.map(booking =>
          booking.id === id ? { ...booking, status } : booking
        )
      );
      
      // Also update filtered bookings
      setFilteredBookings(prevBookings =>
        prevBookings.map(booking =>
          booking.id === id ? { ...booking, status } : booking
        )
      );
    } catch (error: any) {
      console.error('Error updating booking status:', error);
      toast({
        title: 'Error',
        description: 'Could not update booking status. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleFilterChange = (filter: BookingFilter) => {
    let filtered = [...bookings];
    
    // Filter by status
    if (filter.status !== 'all') {
      filtered = filtered.filter(booking => booking.status === filter.status);
    }
    
    // Filter by date range
    if (filter.dateRange.from && filter.dateRange.to) {
      filtered = filtered.filter(booking => {
        const bookingDate = parseISO(booking.created_at);
        return (
          isAfter(bookingDate, filter.dateRange.from!) &&
          isBefore(bookingDate, filter.dateRange.to!)
        );
      });
    }
    
    setFilteredBookings(filtered);
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Admin Dashboard" 
        subtitle="Manage event bookings and inquiries"
        className="bg-luminous-brown/5"
      />

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-seasons text-2xl text-luminous-brown mb-6">Event Inquiries</h2>
          
          {/* Filter controls */}
          <FilterBar onFilterChange={handleFilterChange} />
          
          {/* Bookings table */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-luminous-brown/70">Loading bookings...</p>
            </div>
          ) : (
            <BookingTable 
              bookings={filteredBookings}
              onStatusChange={handleStatusChange}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
