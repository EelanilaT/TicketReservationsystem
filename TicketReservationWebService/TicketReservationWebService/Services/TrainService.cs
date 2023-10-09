using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using TicketReservationWebService.Models;

namespace TicketReservationWebService.Services
{
    public class TrainService
    {

        private readonly IMongoCollection<Train> _trainsCollection;

        public TrainService(IMongoDatabase database)
        {
            _trainsCollection = database.GetCollection<Train>("trains");
        }

        private readonly List<Train> _trains = new List<Train>();

        public List<Train> GetAllTrains()
        {
            return _trains;
        }

        public Train GetTrainById(string id)
        {
            return _trains.FirstOrDefault(t => t.Id == id);
        }

        public Train CreateTrain(Train train)
        {
            // Implement train creation logic
            train.Id = Guid.NewGuid().ToString();
            _trains.Add(train);
            return train;
        }

        public Train UpdateTrain(string id, Train train)
        {
            var existingTrain = _trains.FirstOrDefault(t => t.Id == id);
            if (existingTrain != null)
            {
                // Implement train update logic
                existingTrain.TrainNumber = train.TrainNumber;
                existingTrain.DepartureStation = train.DepartureStation;
                existingTrain.ArrivalStation = train.ArrivalStation;
                existingTrain.DepartureTime = train.DepartureTime;
                existingTrain.ArrivalTime = train.ArrivalTime;
                existingTrain.IsPublished = train.IsPublished;
                return existingTrain;
            }
            return null;
        }

        public Train CancelTrain(string id)
        {
            var trainToRemove = _trains.FirstOrDefault(t => t.Id == id);
            if (trainToRemove != null)
            {
                _trains.Remove(trainToRemove);
                return trainToRemove;
            }
            return null;
        }
    }
}
