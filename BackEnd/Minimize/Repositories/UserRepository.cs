using Minimize.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Minimize.Repositories
{
    public class UserRepository : IUserRepository
    {
        MinimizeContext db;

        public UserRepository(MinimizeContext db)
        {
            this.db = db;
        }

        public IEnumerable<User> GetAll()
        {
            return db.Users.ToList();
        }

        public User GetById(int id)
        {
            return db.Users.Single(user => user.UserId == id);
        }

        public void Add(User user)
        {
            db.Users.Add(user);
            db.SaveChanges();
        }
    }
}
