using Microsoft.EntityFrameworkCore.Migrations;

namespace Minimize.Migrations
{
    public partial class CatDescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 1,
                column: "CategoryDescription",
                value: " There is no shortage when it comes to clothing donation opportunities. Goodwill and Salvation Army are well-known options, but local shelters and outreach programs may also welcome gently used clothing. Dress for Success is a nonprofit that helps women achieve economic independence by providing professional attire. In some states the Vietnam Veterans of America will come to your home to pick up used clothing.");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 2,
                column: "CategoryDescription",
                value: " Just want it gone? Listing your furniture in the Craigslist “Free” section will often get you a pickup in an hour or two. If that doesn’t work, you can pay for 1-800-Got-Junk to pick up and responsibly dispose of your stuff. And, of course, you can donate your furniture to The National Furniture Bank, Goodwill, and Salvation Army. DonationTown is also a great listing of nonprofits that will pick your furniture donation up.");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 4,
                column: "CategoryDescription",
                value: "Tech hardware is a nasty environmental hazard if disposed of incorrectly. Luckily there are lots of options for responsibly dispatching your old laptops and cellphones into the gadget beyond. If your old phone doesn’t qualify for a buyback credit, all of the major mobile carriers in the US—Sprint, Verizon, T-Mobile, and AT&T—will accept cell phones for recycling or refurbishing. Many have programs that pass the phones along to active duty soldiers or victims of domestic violence.For other items(computers, tablets, Bluetooth headsets, ink / toner, batteries, cameras, etc.),check out the recycling programs at Best Buy, Staples, Office Depot and OfficeMax.Tech vendors like Apple, Dell, HP, Samsung and Sony also have recycling programs for their products. Don’t forget to wipe your personal information off of devices before parting with them.");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 1,
                column: "CategoryDescription",
                value: "Clothes");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 2,
                column: "CategoryDescription",
                value: "Junk Furniture");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 4,
                column: "CategoryDescription",
                value: "Computers, phones");
        }
    }
}
