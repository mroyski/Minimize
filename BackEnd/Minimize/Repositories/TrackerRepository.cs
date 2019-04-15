using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Minimize.Repositories
{
    public class TrackerRepository
    {
        MinimizeContext db;

        public TrackerRepository(MinimizeContext db)
        {
            this.db = db;
        }
        public   void GetAll()
        {
            var list = db.
        }

    }
}
