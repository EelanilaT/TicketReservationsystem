using System;

namespace TicketReservationWebService.Models
{
    public class TicketBooking
    {
        public string Id { get; set; }
        public string ReferenceID { get; set; }
        public DateTime ReservationDate { get; set; }
        public string TravelerID { get; set; } // References the NIC of the traveler
        public string TrainID { get; set; } // References the ID of the train
    }
}
