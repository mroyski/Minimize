using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Minimize.Migrations
{
    public partial class PostModelData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Badges",
                columns: table => new
                {
                    BadgeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BadgeName = table.Column<string>(nullable: true),
                    BadgeDescription = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Badges", x => x.BadgeId);
                });

            migrationBuilder.InsertData(
                table: "Badges",
                columns: new[] { "BadgeId", "BadgeDescription", "BadgeName" },
                values: new object[,]
                {
                    { 1, "You successfully joined Minimize!", "Welcome!" },
                    { 15, "You removed 50 total items", "Peace" },
                    { 14, "You removed 35 total items", "Tiny World" },
                    { 13, "You removed 20 total items", "Minimizer" },
                    { 12, "You removed 10 total items", "Novice" },
                    { 11, "You removed 5 total items", "First steps" },
                    { 9, "You removed an item from each category", "Jack of Trades" },
                    { 10, "You removed a post", "Real Minimalist" },
                    { 7, "You removed your first toy item", "Get Serious" },
                    { 6, "You removed your first electronic item", "Overload!" },
                    { 5, "You removed your first tool item", "Not-So-Handy" },
                    { 4, "You removed your first furniture item", "Heavy Load" },
                    { 3, "You removed your first clothing item", "Au Naturel" },
                    { 2, "You made your first post", "First Timer" },
                    { 8, "You removed your first misc item", "Only Necessities" }
                });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 1,
                columns: new[] { "PostDescription", "PostImgPath", "RemovedItems", "TotalItems" },
                values: new object[] { "I have been wanting to get rid of my shoes. I have way to many but it's hard to decide :(", "/Images/Shos.jpg", 1, 15 });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 2,
                columns: new[] { "PostDescription", "PostImgPath", "RemovedItems", "TotalItems" },
                values: new object[] { "I have had this Christmas Story Leg Lamp for eternity. It feels like I only have it because I live in Cleveland. I don't really see any other reason to have it.", "/Images/Lamp.jpg", 1, 1 });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "CategoryId", "PostDescription", "PostImgPath", "RemovedItems", "TotalItems" },
                values: new object[,]
                {
                    { 3, 3, "Not really sure what this is or how to even use it.", "/Images/tool.jpg", 1, 1 },
                    { 4, 4, "I was planning on keeping this ancient thing and hopefully sell it but nobody wants it", "/Images/ibm.jpg", 1, 1 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Badges");

            migrationBuilder.DeleteData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 4);

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 1,
                columns: new[] { "PostDescription", "PostImgPath", "RemovedItems", "TotalItems" },
                values: new object[] { "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum tortor sed metus sollicitudin, ut malesuada quam ultrices. Nullam quis dui fringilla, eleifend mi in, pharetra neque. Sed iaculis, urna quis pulvinar scelerisque, nunc justo fringilla lectus, quis dictum ligula libero et enim. Nunc pharetra, diam ac tristique rutrum, neque ligula lacinia nibh, vehicula lacinia tellus velit quis orci. Phasellus dui enim, pulvinar quis rhoncus eget, elementum finibus risus. Integer bibendum leo ac felis sodales viverra. Aenean tincidunt felis ut orci tristique consequat. In quam elit, blandit non pretium et, feugiat et nisl. Vestibulum ac luctus leo.", "/Images/Junk.jpg", 15, 32 });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 2,
                columns: new[] { "PostDescription", "PostImgPath", "RemovedItems", "TotalItems" },
                values: new object[] { "Lickies and Chewies", "/Images/Junk.jpg", 65, 15 });
        }
    }
}
