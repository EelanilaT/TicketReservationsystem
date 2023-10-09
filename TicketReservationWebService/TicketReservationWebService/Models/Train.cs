using System;

namespace TicketReservationWebService.Models
{
    public class Train
    {
        public string Id { get; set; }
        public string TrainNumber { get; set; }
        public string DepartureStation { get; set; }
        public string ArrivalStation { get; set; }
        public DateTime DepartureTime { get; set; }
        public DateTime ArrivalTime { get; set; }
        public bool IsPublished { get; set; }
    }
}
