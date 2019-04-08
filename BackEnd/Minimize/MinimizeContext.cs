using Microsoft.EntityFrameworkCore;
using Minimize.Models;


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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
            new Category()
            {
                CategoryId = 1,
                CategoryName = "Clothing",
                CategoryDescription = "Clothes",
                CategoryImg = "tshirt"
            },
            new Category()
            {
                CategoryId = 2,
                CategoryName = "Furniture",
                CategoryDescription = "Junk Furniture",
                CategoryImg = "couch"
            },
            new Category()
            {
                CategoryId = 3,
                CategoryName = "Tools",
                CategoryDescription = "Toolbox",
                CategoryImg = "tools"
            },
            new Category()
            {
                CategoryId = 4,
                CategoryName = "Electronics",
                CategoryDescription = "Computers, phones",
                CategoryImg = "laptop"
            },
            new Category()
            {
                CategoryId = 5,
                CategoryName = "Toys",
                CategoryDescription = "Fun stuff",
                CategoryImg = "truck-monster"
            },
            new Category()
            {
                CategoryId = 6,
                CategoryName = "Misc",
                CategoryDescription = "Other stuff",
                CategoryImg = "question"
            }
            );

            modelBuilder.Entity<Post>().HasData(
               new Post()
               {
                   PostId = 1,
                   TotalItems = 32,
                   RemovedItems = 15,
                   PostDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum tortor sed metus sollicitudin, ut malesuada quam ultrices. Nullam quis dui fringilla, eleifend mi in, pharetra neque. Sed iaculis, urna quis pulvinar scelerisque, nunc justo fringilla lectus, quis dictum ligula libero et enim. Nunc pharetra, diam ac tristique rutrum, neque ligula lacinia nibh, vehicula lacinia tellus velit quis orci. Phasellus dui enim, pulvinar quis rhoncus eget, elementum finibus risus. Integer bibendum leo ac felis sodales viverra. Aenean tincidunt felis ut orci tristique consequat. In quam elit, blandit non pretium et, feugiat et nisl. Vestibulum ac luctus leo.",
                   PostImgPath = "/Images/Junk.jpg",
                   CategoryId = 1
               },
               new Post()
               {
                   PostId = 2,
                   TotalItems = 15,
                   RemovedItems = 65,
                   PostDescription = "Lickies and Chewies",
                   PostImgPath = "/Images/Junk.jpg",
                   CategoryId = 2
               }
               );


        }
    }
}