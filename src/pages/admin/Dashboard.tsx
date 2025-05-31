import { useState, useEffect } from 'react';
import { FilterBar } from '@/components/admin/FilterBar';
import { BookingTable } from '@/components/admin/BookingTable';
import { useToast } from '@/hooks/use-toast';
import { Booking, BookingFilter } from '@/types';
import { isBefore, isAfter, parseISO } from 'date-fns';
import client from '@/lib/pocketbaseClient';
import { SideNav } from '@/components/admin/SideNav';

const Dashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    console.log("🪪 Auth token:", client.authStore.token);
    console.log("👤 Auth model:", client.authStore.model);

    const fetchBookings = async () => {
      try {
        const records = await client.collection('bookings').getFullList<Booking>();
        console.log("✅ Records pulled:", records);

        setBookings(records);
        setFilteredBookings(records);
      } catch (error) {
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

    fetchBookings();

    const unsubscribe = client.collection('bookings').subscribe('*', () => {
      fetchBookings();
    });

    return () => {
      client.collection('bookings').unsubscribe('*');
    };
  }, [toast]);

  const handleStatusChange = async (
    id: string,
    status: 'accepted' | 'declined' | 'cancelled',
    message?: string
  ) => {
    try {
      await client.collection('bookings').update(id, {
        status,
        updated_at: new Date().toISOString(),
      });

      toast({
        title: 'Status Updated',
        description: `Booking has been ${status}.`,
      });

      setBookings(prev =>
        prev.map(b => (b.id === id ? { ...b, status } : b))
      );
      setFilteredBookings(prev =>
        prev.map(b => (b.id === id ? { ...b, status } : b))
      );
    } catch (error) {
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

    if (filter.status !== 'all') {
      filtered = filtered.filter(b => b.status === filter.status);
    }

    if (filter.dateRange.from && filter.dateRange.to) {
      filtered = filtered.filter(b => {
        const bookingDate = parseISO(b.created);
        return (
          isAfter(bookingDate, filter.dateRange.from!) &&
          isBefore(bookingDate, filter.dateRange.to!)
        );
      });
    }

    setFilteredBookings(filtered);
  };

  return (
    <div className="flex min-h-screen">
      <SideNav />

      <main className="flex-1 bg-luminous-brown/5 p-8">
        <h1 className="text-3xl font-seasons text-luminous-brown mb-6">Admin Dashboard</h1>

        <FilterBar onFilterChange={handleFilterChange} />

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
      </main>
    </div>
  );
};

export default Dashboard;
