import React, { useState } from 'react';
import axios from 'axios';


function TicketBookingForm() {
  const [booking, setBooking] = useState({
    referenceID: '',
    reservationDate: '',
    travelerID: '',
    trainID: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7254/ticket-booking', booking)
      .then((response) => {
        console.log('Booking created:', response.data);
        
      })
      .catch((error) => {
        console.error('Error creating booking:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Ticket Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="referenceID">Reference ID:</label>
          <input
            type="text"
            className="form-control"
            id="referenceID"
            name="referenceID"
            value={booking.referenceID}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reservationDate">Reservation Date:</label>
          <input
            type="date"
            className="form-control"
            id="reservationDate"
            name="reservationDate"
            value={booking.reservationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="travelerID">Traveler ID:</label>
          <input
            type="text"
            className="form-control"
            id="travelerID"
            name="travelerID"
            value={booking.travelerID}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="trainID">Train ID:</label>
          <input
            type="text"
            className="form-control"
            id="trainID"
            name="trainID"
            value={booking.trainID}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <br></br>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TicketBookingForm;
