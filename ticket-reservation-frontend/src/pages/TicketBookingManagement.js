import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TicketBookingManagement() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    // Fetch ticket booking data from your API when the component mounts
    axios.get('http://localhost:7254/ticket-bookings')
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ticket bookings:', error);
      });
  }, []);

  const handleEdit = (booking) => {
    // Set the selected booking for editing
    setSelectedBooking(booking);
  };

  const handleDelete = (bookingId) => {
    // Send a DELETE request to your API to delete the selected booking
    axios.delete(`http://localhost:7254/ticket-booking/${bookingId}`)
      .then(() => {
        // Remove the deleted booking from the state
        setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== bookingId));
      })
      .catch((error) => {
        console.error('Error deleting booking:', error);
      });
  };

  const handleUpdate = (updatedBooking) => {
    // Send a PUT request to update the selected booking
    axios.put(`http://localhost:7254/ticket-booking/${updatedBooking._id}`, updatedBooking)
      .then(() => {
        // Update the state with the updated booking
        setBookings((prevBookings) => prevBookings.map((booking) => (booking._id === updatedBooking._id ? updatedBooking : booking)));
        setSelectedBooking(null); // Clear the selected booking after editing
      })
      .catch((error) => {
        console.error('Error updating booking:', error);
      });
  };

  const renderBookingTable = () => {
    if (bookings.length === 0) {
      return <p>No bookings available.</p>;
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Reference ID</th>
            <th>Reservation Date</th>
            <th>Traveler ID</th>
            <th>Train ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.referenceID}</td>
              <td>{booking.reservationDate}</td>
              <td>{booking.travelerID}</td>
              <td>{booking.trainID}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleEdit(booking)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(booking._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderEditForm = () => {
    if (!selectedBooking) {
      return null;
    }

    // Define a form structure similar to TicketBookingForm for editing
    return (
      <div className="mt-4">
        <h3>Edit Booking</h3>
        <form onSubmit={() => handleUpdate(selectedBooking)}>
          <div className="form-group">
            <label htmlFor="referenceID">Reference ID:</label>
            <input
              type="text"
              className="form-control"
              id="referenceID"
              name="referenceID"
              value={selectedBooking.referenceID}
              onChange={(e) => setSelectedBooking({ ...selectedBooking, referenceID: e.target.value })}
              required
            />
          </div>
          {/* Add similar form fields for editing other booking properties */}
          <button type="submit" className="btn btn-primary">Save Changes</button>
          <button className="btn btn-secondary ml-2" onClick={() => setSelectedBooking(null)}>Cancel</button>
        </form>
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Ticket Booking Management</h2>
      {renderBookingTable()}
      {renderEditForm()}
    </div>
  );
}

export default TicketBookingManagement;
