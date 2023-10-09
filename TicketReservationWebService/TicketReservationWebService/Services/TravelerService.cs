using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using TicketReservationWebService.Models;

namespace TicketReservationWebService.Services
{
    public class TravelerService
    {

        private readonly IMongoCollection<Traveler> _travelersCollection;

        public TravelerService(IMongoDatabase database)
        {
            _travelersCollection = database.GetCollection<Traveler>("travelers");
        }

        private readonly List<Traveler> _travelers = new List<Traveler>();

        public List<Traveler> GetAllTravelers()
        {
            return _travelers;
        }

        public Traveler GetTravelerByNIC(string nic)
        {
            return _travelers.FirstOrDefault(t => t.NIC == nic);
        }

        public Traveler CreateTraveler(Traveler traveler)
        {
            // Implement traveler creation logic
            _travelers.Add(traveler);
            return traveler;
        }

        public Traveler UpdateTraveler(string nic, Traveler traveler)
        {
            var existingTraveler = _travelers.FirstOrDefault(t => t.NIC == nic);
            if (existingTraveler != null)
            {
                // Implement traveler update logic
                existingTraveler.Name = traveler.Name;
                existingTraveler.Email = traveler.Email;
                existingTraveler.Phone = traveler.Phone;
                existingTraveler.IsActive = traveler.IsActive;
                return existingTraveler;
            }
            return null;
        }

        public Traveler DeleteTraveler(string nic)
        {
            var travelerToRemove = _travelers.FirstOrDefault(t => t.NIC == nic);
            if (travelerToRemove != null)
            {
                _travelers.Remove(travelerToRemove);
                return travelerToRemove;
            }
            return null;
        }
    }
}
