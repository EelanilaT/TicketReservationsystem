using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using TicketReservationWebService.Models;

namespace TicketReservationWebService.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _usersCollection;

        public UserService(IMongoDatabase database)
        {
            _usersCollection = database.GetCollection<User>("users");
        }

        private readonly List<User> _users = new List<User>();

        public UserService()
        {
            // Initialize users (you can load them from the database)
            _users.Add(new User { Id = "1", Username = "backoffice_user", Password = "hashed_password", Role = "Backoffice" });
        }

        public List<User> GetAllUsers()
        {
            return _users;
        }

        public User GetUserById(string id)
        {
            return _users.FirstOrDefault(u => u.Id == id);
        }

        public User CreateUser(User user)
        {
            // Implement user creation logic (e.g., hash the password)
            user.Id = (_users.Count + 1).ToString();
            _users.Add(user);
            return user;
        }

        public User UpdateUser(string id, User user)
        {
            var existingUser = _users.FirstOrDefault(u => u.Id == id);
            if (existingUser != null)
            {
                // Implement user update logic
                existingUser.Username = user.Username;
                existingUser.Password = user.Password;
                existingUser.Role = user.Role;
                return existingUser;
            }
            return null;
        }

        public User DeleteUser(string id)
        {
            var userToRemove = _users.FirstOrDefault(u => u.Id == id);
            if (userToRemove != null)
            {
                _users.Remove(userToRemove);
                return userToRemove;
            }
            return null;
        }
    }
}
