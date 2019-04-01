using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Minimize.Models;


namespace Minimize.Repositories
{
    public class PostRepository
    {
        MinimizeContext db;

        public PostRepository(MinimizeContext db)
        {
            this.db = db;
        }

        public IEnumerable<Post> GetAll()
        {
            return db.Posts.ToList();
        }
    }
}
