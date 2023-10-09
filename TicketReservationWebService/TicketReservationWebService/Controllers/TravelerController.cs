using Microsoft.AspNetCore.Mvc;
using TicketReservationWebService.Models;
using TicketReservationWebService.Services;

namespace TicketReservationWebService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravelerController : ControllerBase
    {
        private readonly TravelerService _travelerService;

        public TravelerController(TravelerService travelerService)
        {
            _travelerService = travelerService;
        }

        [HttpPost]
        public IActionResult CreateTraveler([FromBody] Traveler traveler)
        {
            var createdTraveler = _travelerService.CreateTraveler(traveler);
            return Ok(createdTraveler);
        }

        [HttpGet("{nic}")]
        public IActionResult GetTravelerByNIC(string nic)
        {
            var traveler = _travelerService.GetTravelerByNIC(nic);
            if (traveler == null)
            {
                return NotFound();
            }
            return Ok(traveler);
        }

        [HttpPut("{nic}")]
        public IActionResult UpdateTraveler(string nic, [FromBody] Traveler traveler)
        {
            var updatedTraveler = _travelerService.UpdateTraveler(nic, traveler);
            if (updatedTraveler == null)
            {
                return NotFound();
            }
            return Ok(updatedTraveler);
        }

        [HttpDelete("{nic}")]
        public IActionResult DeleteTraveler(string nic)
        {
            var deletedTraveler = _travelerService.DeleteTraveler(nic);
            if (deletedTraveler == null)
            {
                return NotFound();
            }
            return Ok(deletedTraveler);
        }
    }
}
