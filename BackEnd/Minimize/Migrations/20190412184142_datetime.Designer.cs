﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Minimize;

namespace Minimize.Migrations
{
    [DbContext(typeof(MinimizeContext))]
    [Migration("20190412184142_datetime")]
    partial class datetime
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Minimize.Models.Badge", b =>
                {
                    b.Property<int>("BadgeId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BadgeDescription");

                    b.Property<string>("BadgeName");

                    b.HasKey("BadgeId");

                    b.ToTable("Badges");

                    b.HasData(
                        new { BadgeId = 1, BadgeDescription = "You successfully joined Minimize!", BadgeName = "Welcome!" },
                        new { BadgeId = 2, BadgeDescription = "You made your first post", BadgeName = "First Timer" },
                        new { BadgeId = 3, BadgeDescription = "You removed your first clothing item", BadgeName = "Au Naturel" },
                        new { BadgeId = 4, BadgeDescription = "You removed your first furniture item", BadgeName = "Heavy Load" },
                        new { BadgeId = 5, BadgeDescription = "You removed your first tool item", BadgeName = "Not-So-Handy" },
                        new { BadgeId = 6, BadgeDescription = "You removed your first electronic item", BadgeName = "Overload!" },
                        new { BadgeId = 7, BadgeDescription = "You removed your first toy item", BadgeName = "Get Serious" },
                        new { BadgeId = 8, BadgeDescription = "You removed your first misc item", BadgeName = "Only Necessities" },
                        new { BadgeId = 9, BadgeDescription = "You removed an item from each category", BadgeName = "Jack of Trades" },
                        new { BadgeId = 10, BadgeDescription = "You removed a post", BadgeName = "Real Minimalist" },
                        new { BadgeId = 11, BadgeDescription = "You removed 5 total items", BadgeName = "First steps" },
                        new { BadgeId = 12, BadgeDescription = "You removed 10 total items", BadgeName = "Novice" },
                        new { BadgeId = 13, BadgeDescription = "You removed 20 total items", BadgeName = "Minimizer" },
                        new { BadgeId = 14, BadgeDescription = "You removed 35 total items", BadgeName = "Tiny World" },
                        new { BadgeId = 15, BadgeDescription = "You removed 50 total items", BadgeName = "Peace" }
                    );
                });

            modelBuilder.Entity("Minimize.Models.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CategoryDescription");

                    b.Property<string>("CategoryImg");

                    b.Property<string>("CategoryName");

                    b.HasKey("CategoryId");

                    b.ToTable("Categories");

                    b.HasData(
                        new { CategoryId = 1, CategoryDescription = " There is no shortage when it comes to clothing donation opportunities. Goodwill and Salvation Army are well-known options, but local shelters and outreach programs may also welcome gently used clothing. Dress for Success is a nonprofit that helps women achieve economic independence by providing professional attire. In some states the Vietnam Veterans of America will come to your home to pick up used clothing.", CategoryImg = "tshirt", CategoryName = "Clothing" },
                        new { CategoryId = 2, CategoryDescription = " Just want it gone? Listing your furniture in the Craigslist “Free” section will often get you a pickup in an hour or two. If that doesn’t work, you can pay for 1-800-Got-Junk to pick up and responsibly dispose of your stuff. And, of course, you can donate your furniture to The National Furniture Bank, Goodwill, and Salvation Army. DonationTown is also a great listing of nonprofits that will pick your furniture donation up.", CategoryImg = "couch", CategoryName = "Furniture" },
                        new { CategoryId = 3, CategoryDescription = " If you’ve got paint, tools, or building supplies that need a new home, Habitat for Humanity is a great place to donate. Check their website for a location in your area.", CategoryImg = "tools", CategoryName = "Tools" },
                        new { CategoryId = 4, CategoryDescription = "Tech hardware is a nasty environmental hazard if disposed of incorrectly. Luckily there are lots of options for responsibly dispatching your old laptops and cellphones into the gadget beyond. If your old phone doesn’t qualify for a buyback credit, all of the major mobile carriers in the US—Sprint, Verizon, T-Mobile, and AT&T—will accept cell phones for recycling or refurbishing. Many have programs that pass the phones along to active duty soldiers or victims of domestic violence.For other items(computers, tablets, Bluetooth headsets, ink / toner, batteries, cameras, etc.),check out the recycling programs at Best Buy, Staples, Office Depot and OfficeMax.Tech vendors like Apple, Dell, HP, Samsung and Sony also have recycling programs for their products. Don’t forget to wipe your personal information off of devices before parting with them.", CategoryImg = "laptop", CategoryName = "Electronics" },
                        new { CategoryId = 5, CategoryDescription = " When your kid outgrows toys—or when you’ve reached the point where you just can’t even with Elsa’s Frozen musical snow wand—there are lots of kid-oriented nonprofits that will find them a new home. Check out Toys for Tots, Second Chance Toys, and DonationTown’s toy pickup. ", CategoryImg = "truck-monster", CategoryName = "Toys" },
                        new { CategoryId = 6, CategoryDescription = "If you’re downsizing and have stuff you only use occasionally but want to keep (think camping gear, Christmas decorations, snowboards, strollers, suitcases, antique stamp collections, etc.), look into innovative on-demand storage from companies like Omni (currently available in San Francisco, but expanding soon), Clutter (California and New York), and Closetbox (45 metropolitan areas). These companies pick up and store your stuff (in addition to uploading pictures of your items to a “virtual” storage container). When you need an item, they deliver it to your door.", CategoryImg = "question", CategoryName = "Misc" }
                    );
                });

            modelBuilder.Entity("Minimize.Models.Goal", b =>
                {
                    b.Property<int>("GoalId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Date");

                    b.Property<string>("Text");

                    b.HasKey("GoalId");

                    b.ToTable("Goals");

                    b.HasData(
                        new { GoalId = 1, Date = "4/12/2019", Text = "Don't Go to Steelers Game!!!" },
                        new { GoalId = 2, Date = "4/11/2019", Text = "Clean up closet" },
                        new { GoalId = 3, Date = "4/11/2019", Text = "Donate kitchen supplies" }
                    );
                });

            modelBuilder.Entity("Minimize.Models.Post", b =>
                {
                    b.Property<int>("PostId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId");

                    b.Property<string>("PostDescription");

                    b.Property<string>("PostImgPath");

                    b.Property<DateTime>("PostTime");

                    b.Property<int>("RemovedItems");

                    b.Property<int>("TotalItems");

                    b.HasKey("PostId");

                    b.HasIndex("CategoryId");

                    b.ToTable("Posts");

                    b.HasData(
                        new { PostId = 1, CategoryId = 1, PostDescription = "I have been wanting to get rid of my shoes. I have way to many but it's hard to decide :(", PostImgPath = "/Images/Shos.jpg", PostTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), RemovedItems = 1, TotalItems = 15 },
                        new { PostId = 2, CategoryId = 2, PostDescription = "I have had this Christmas Story Leg Lamp for eternity. It feels like I only have it because I live in Cleveland. I don't really see any other reason to have it.", PostImgPath = "/Images/Lamp.jpg", PostTime = new DateTime(2019, 11, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), RemovedItems = 1, TotalItems = 1 },
                        new { PostId = 3, CategoryId = 3, PostDescription = "Not really sure what this is or how to even use it.", PostImgPath = "/Images/tool.jpg", PostTime = new DateTime(2019, 12, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), RemovedItems = 1, TotalItems = 1 },
                        new { PostId = 4, CategoryId = 4, PostDescription = "I was planning on keeping this ancient thing and hopefully sell it but nobody wants it", PostImgPath = "/Images/ibm.jpg", PostTime = new DateTime(2019, 10, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), RemovedItems = 1, TotalItems = 1 }
                    );
                });

            modelBuilder.Entity("Minimize.Models.Post", b =>
                {
                    b.HasOne("Minimize.Models.Category")
                        .WithMany("Posts")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
