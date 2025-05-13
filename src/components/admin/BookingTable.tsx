
import React, { useState } from 'react';
import { format } from 'date-fns';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Booking } from '@/types';
import { BookingDetails } from './BookingDetails';

type BookingTableProps = {
  bookings: Booking[];
  onStatusChange: (id: string, status: 'accepted' | 'declined' | 'cancelled') => Promise<void>;
};

export const BookingTable: React.FC<BookingTableProps> = ({ bookings, onStatusChange }) => {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRowClick = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsDialogOpen(true);
  };

  const getStatusClassName = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'declined':
        return 'bg-red-100 text-red-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  if (bookings.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-luminous-brown/70">No bookings found matching the current filters.</p>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Event Type</TableHead>
              <TableHead>Event Date</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow 
                key={booking.id}
                className="cursor-pointer hover:bg-muted/30"
                onClick={() => handleRowClick(booking)}
              >
                <TableCell className="font-medium">
                  {format(new Date(booking.created_at), 'MMM dd, yyyy')}
                </TableCell>
                <TableCell>{booking.name}</TableCell>
                <TableCell>{booking.event_type}</TableCell>
                <TableCell>
                  {booking.event_date 
                    ? format(new Date(booking.event_date), 'MMM dd, yyyy')
                    : 'Not specified'}
                </TableCell>
                <TableCell className="text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClassName(booking.status)}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-luminous-brown font-seasons text-2xl">
              Booking Details
            </DialogTitle>
          </DialogHeader>
          {selectedBooking && (
            <BookingDetails 
              booking={selectedBooking} 
              onStatusChange={onStatusChange} 
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
