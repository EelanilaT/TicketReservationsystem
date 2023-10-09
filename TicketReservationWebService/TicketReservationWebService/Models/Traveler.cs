using System;

namespace TicketReservationWebService.Models
{
    public class Traveler
    {
        public string NIC { get; set; } // National Identification Card as the primary key
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public bool IsActive { get; set; }
    }
}
