using Microsoft.AspNetCore.Mvc;
using TicketReservationWebService.Models;
using TicketReservationWebService.Services;

namespace TicketReservationWebService.Controllers
{
    [Route("api/ticketBookings")]
    [ApiController]
    public class TicketBookingController : ControllerBase
    {
        private readonly TicketBookingService _ticketBookingService;

        public TicketBookingController(TicketBookingService ticketBookingService)
        {
            _ticketBookingService = ticketBookingService;
        }

        [HttpPost]
        public IActionResult CreateTicketBooking([FromBody] TicketBooking ticketBooking)
        {
            var createdBooking = _ticketBookingService.CreateTicketBooking(ticketBooking);
            return Ok(createdBooking);
        }

        [HttpGet("{id}")]
        public IActionResult GetTicketBookingById(string id)
        {
            var booking = _ticketBookingService.GetTicketBookingById(id);
            if (booking == null)
            {
                return NotFound();
            }
            return Ok(booking);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTicketBooking(string id, [FromBody] TicketBooking ticketBooking)
        {
            var updatedBooking = _ticketBookingService.UpdateTicketBooking(id, ticketBooking);
            if (updatedBooking == null)
            {
                return NotFound();
            }
            return Ok(updatedBooking);
        }

        [HttpDelete("{id}")]
        public IActionResult CancelTicketBooking(string id)
        {
            var canceledBooking = _ticketBookingService.CancelTicketBooking(id);
            if (canceledBooking == null)
            {
                return NotFound();
            }
            return Ok(canceledBooking);
        }
    }
}
