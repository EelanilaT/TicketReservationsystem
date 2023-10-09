using System;
using System.Security.Cryptography;
using System.Text;

namespace TicketReservationWebService.Helpers
{
    public class HashHelper
    {
        public static string HashPassword(string password, string salt)
        {
            using (var sha256 = SHA256.Create())
            {
                var saltedPassword = $"{password}{salt}";
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(saltedPassword));
                return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
            }
        }

        public static bool VerifyPassword(string hashedPassword, string salt, string inputPassword)
        {
            var inputHash = HashPassword(inputPassword, salt);
            return inputHash == hashedPassword;
        }

        public static string GenerateSalt()
        {
            using (var rng = new RNGCryptoServiceProvider())
            {
                var saltBytes = new byte[32];
                rng.GetBytes(saltBytes);
                return BitConverter.ToString(saltBytes).Replace("-", "").ToLower();
            }
        }
    }
}
