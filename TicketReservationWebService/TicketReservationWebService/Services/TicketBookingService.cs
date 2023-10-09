using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using TicketReservationWebService.Models;

namespace TicketReservationWebService.Services
{
    public class TicketBookingService
    {

        private readonly IMongoCollection<TicketBooking> _ticketBookingsCollection;

        public TicketBookingService(IMongoDatabase database)
        {
            _ticketBookingsCollection = database.GetCollection<TicketBooking>("ticketBookings");
        }

        private readonly List<TicketBooking> _ticketBookings = new List<TicketBooking>();

        public List<TicketBooking> GetAllTicketBookings()
        {
            return _ticketBookings;
        }

        public TicketBooking GetTicketBookingById(string id)
        {
            return _ticketBookings.FirstOrDefault(tb => tb.Id == id);
        }

        public TicketBooking CreateTicketBooking(TicketBooking ticketBooking)
        {
            // Implement ticket booking creation logic (e.g., check reservation date)
            ticketBooking.Id = Guid.NewGuid().ToString();
            _ticketBookings.Add(ticketBooking);
            return ticketBooking;
        }

        public TicketBooking UpdateTicketBooking(string id, TicketBooking ticketBooking)
        {
            var existingBooking = _ticketBookings.FirstOrDefault(tb => tb.Id == id);
            if (existingBooking != null)
            {
                // Implement ticket booking update logic (e.g., validate and update reservation date)
                existingBooking.ReferenceID = ticketBooking.ReferenceID;
                existingBooking.ReservationDate = ticketBooking.ReservationDate;
                existingBooking.TravelerID = ticketBooking.TravelerID;
                existingBooking.TrainID = ticketBooking.TrainID;
                return existingBooking;
            }
            return null;
        }

        public TicketBooking CancelTicketBooking(string id)
        {
            var bookingToRemove = _ticketBookings.FirstOrDefault(tb => tb.Id == id);
            if (bookingToRemove != null)
            {
                _ticketBookings.Remove(bookingToRemove);
                return bookingToRemove;
            }
            return null;
        }
    }
}
