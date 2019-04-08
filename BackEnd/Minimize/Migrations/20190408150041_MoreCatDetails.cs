using Microsoft.EntityFrameworkCore.Migrations;

namespace Minimize.Migrations
{
    public partial class MoreCatDetails : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 3,
                column: "CategoryDescription",
                value: " If you’ve got paint, tools, or building supplies that need a new home, Habitat for Humanity is a great place to donate. Check their website for a location in your area.");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 5,
                column: "CategoryDescription",
                value: " When your kid outgrows toys—or when you’ve reached the point where you just can’t even with Elsa’s Frozen musical snow wand—there are lots of kid-oriented nonprofits that will find them a new home. Check out Toys for Tots, Second Chance Toys, and DonationTown’s toy pickup. ");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 6,
                column: "CategoryDescription",
                value: "If you’re downsizing and have stuff you only use occasionally but want to keep (think camping gear, Christmas decorations, snowboards, strollers, suitcases, antique stamp collections, etc.), look into innovative on-demand storage from companies like Omni (currently available in San Francisco, but expanding soon), Clutter (California and New York), and Closetbox (45 metropolitan areas). These companies pick up and store your stuff (in addition to uploading pictures of your items to a “virtual” storage container). When you need an item, they deliver it to your door.");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 3,
                column: "CategoryDescription",
                value: "Toolbox");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 5,
                column: "CategoryDescription",
                value: "Fun stuff");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 6,
                column: "CategoryDescription",
                value: "Other stuff");
        }
    }
}
