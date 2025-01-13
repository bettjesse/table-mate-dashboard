import React, { useEffect, useState } from 'react';

import { useGetAllReservationsQuery } from '../slices/reservationApiSlice';
const ReservationsTable = () => {
  const { data: reservations, isLoading, isError } = useGetAllReservationsQuery(); // Fetch reservations
  const [loading, setLoading] = useState(false);

  const handleStatusChange = async (reservationId, newStatus) => {
    setLoading(true);
    try {
      // Call an API or function to update the reservation status
      // Example: updateReservationStatus(reservationId, newStatus);
      // After the update, you might want to refetch data or update the state
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading reservations.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Reservations</h2>
      <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-bold text-gray-700">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Guests</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations?.reservations.map((reservation) => (
            <tr key={reservation._id} className="border-t border-gray-200">
              <td className="px-4 py-2 text-sm">{reservation.user.name}</td>
              <td className="px-4 py-2 text-sm">{new Date(reservation.time).toLocaleTimeString()}</td>
              <td className="px-4 py-2 text-sm">{new Date(reservation.date).toLocaleDateString()}</td>
              <td className="px-4 py-2 text-sm">{reservation.phone}</td>
              <td className="px-4 py-2 text-sm">
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                    reservation.status === 'confirmed'
                      ? 'bg-green-200 text-green-800'
                      : reservation.status === 'pending'
                      ? 'bg-yellow-200 text-yellow-800'
                      : 'bg-red-200 text-red-800'
                  }`}
                >
                  {reservation.status}
                </span>
              </td>
              <td className="px-4 py-2 text-sm">{reservation.numberOfGuests}</td>
              <td className="px-4 py-2 text-sm">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-xs"
                //   onClick={() => handleStatusChange(reservation._id, 'confirmed')}
                  disabled={loading}
                >
                  Confirm
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 text-xs ml-2"
                //   onClick={() => handleStatusChange(reservation._id, 'pending')}
                  disabled={loading}
                >
                  Pending
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-xs ml-2"
                //   onClick={() => handleStatusChange(reservation._id, 'canceled')}
                  disabled={loading}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsTable;
