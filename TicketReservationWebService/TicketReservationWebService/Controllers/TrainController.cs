using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TicketReservationWebService.Models;
using TicketReservationWebService.Services;

namespace TicketReservationWebService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainController : ControllerBase
    {
        private readonly TrainService _trainService;

        public TrainController(TrainService trainService)
        {
            _trainService = trainService;
        }

        [HttpPost]
        public IActionResult CreateTrain([FromBody] Train train)
        {
            var createdTrain = _trainService.CreateTrain(train);
            return Ok(createdTrain);
        }

        [HttpGet("{id}")]
        public IActionResult GetTrainById(string id)
        {
            var train = _trainService.GetTrainById(id);
            if (train == null)
            {
                return NotFound();
            }
            return Ok(train);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTrain(string id, [FromBody] Train train)
        {
            var updatedTrain = _trainService.UpdateTrain(id, train);
            if (updatedTrain == null)
            {
                return NotFound();
            }
            return Ok(updatedTrain);
        }

        [HttpDelete("{id}")]
        public IActionResult CancelTrain(string id)
        {
            var canceledTrain = _trainService.CancelTrain(id);
            if (canceledTrain == null)
            {
                return NotFound();
            }
            return Ok(canceledTrain);
        }
    }
}
