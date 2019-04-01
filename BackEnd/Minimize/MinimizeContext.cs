using Microsoft.EntityFrameworkCore;
using Minimize.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Minimize
{
    public class MinimizeContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=minimize;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }
    }
}
