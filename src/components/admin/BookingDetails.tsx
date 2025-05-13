
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, Mail, MessageCircle, Phone, User, Users } from 'lucide-react';
import { Booking } from '@/types';

type BookingDetailsProps = {
  booking: Booking;
  onStatusChange: (id: string, status: 'accepted' | 'declined' | 'cancelled', message?: string) => Promise<void>;
};

export const BookingDetails: React.FC<BookingDetailsProps> = ({ booking, onStatusChange }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessageField, setShowMessageField] = useState(false);

  const handleStatusChange = async (status: 'accepted' | 'declined' | 'cancelled') => {
    if ((status === 'declined' || status === 'cancelled') && !showMessageField) {
      // First show the message field
      setShowMessageField(true);
      return;
    }
    
    try {
      setIsProcessing(true);
      await onStatusChange(booking.id, status, message);
      setShowMessageField(false);
      setMessage('');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCancel = () => {
    setShowMessageField(false);
    setMessage('');
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <User className="h-5 w-5 text-luminous-mauve flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Name</p>
            <p className="text-luminous-brown/80">{booking.name}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 text-luminous-mauve flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-luminous-brown/80">{booking.email}</p>
          </div>
        </div>
        
        {booking.phone && (
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-luminous-mauve flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-luminous-brown/80">{booking.phone}</p>
            </div>
          </div>
        )}
        
        <div className="flex items-start gap-3">
          <Calendar className="h-5 w-5 text-luminous-mauve flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Event Type</p>
            <p className="text-luminous-brown/80">{booking.event_type}</p>
          </div>
        </div>
        
        {booking.event_date && (
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-luminous-mauve flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Event Date</p>
              <p className="text-luminous-brown/80">
                {format(new Date(booking.event_date), 'MMMM dd, yyyy')}
              </p>
            </div>
          </div>
        )}
        
        {booking.guest_count && (
          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-luminous-mauve flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Guest Count</p>
              <p className="text-luminous-brown/80">{booking.guest_count}</p>
            </div>
          </div>
        )}
        
        {booking.message && (
          <div className="flex items-start gap-3">
            <MessageCircle className="h-5 w-5 text-luminous-mauve flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Message</p>
              <p className="text-luminous-brown/80 whitespace-pre-line">{booking.message}</p>
            </div>
          </div>
        )}
        
        <div className="flex items-start gap-3">
          <Calendar className="h-5 w-5 text-luminous-mauve flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Inquiry Date</p>
            <p className="text-luminous-brown/80">
              {format(new Date(booking.created_at), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="font-medium mb-2">Status: <span className="font-semibold capitalize">{booking.status}</span></h4>
        
        {showMessageField ? (
          <div className="space-y-4">
            <div>
              <label htmlFor="cancellation-message" className="block text-sm font-medium text-gray-700 mb-1">
                {booking.status === 'pending' ? 'Reason for declining' : 'Reason for cancellation'}
              </label>
              <textarea
                id="cancellation-message"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Provide a reason to be shared with the client..."
              ></textarea>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => booking.status === 'pending' ? handleStatusChange('declined') : handleStatusChange('cancelled')}
                disabled={isProcessing}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors disabled:opacity-70"
              >
                {booking.status === 'pending' ? 'Confirm Decline' : 'Confirm Cancellation'}
              </button>
              <button
                onClick={handleCancel}
                disabled={isProcessing}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors disabled:opacity-70"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {(booking.status === 'pending' || booking.status === 'declined') && (
              <button
                onClick={() => handleStatusChange('accepted')}
                disabled={isProcessing}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors disabled:opacity-70"
              >
                Accept
              </button>
            )}
            
            {(booking.status === 'pending' || booking.status === 'accepted') && (
              <button
                onClick={() => booking.status === 'pending' ? handleStatusChange('declined') : handleStatusChange('cancelled')}
                disabled={isProcessing}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors disabled:opacity-70"
              >
                {booking.status === 'pending' ? 'Decline' : 'Cancel'}
              </button>
            )}
            
            {isProcessing && <span className="text-sm italic">Processing...</span>}
          </div>
        )}
      </div>
    </div>
  );
};
