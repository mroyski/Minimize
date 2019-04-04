using Microsoft.EntityFrameworkCore.Migrations;

namespace Minimize.Migrations
{
    public partial class changingcategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 1,
                column: "CategoryImg",
                value: "tshirt");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 1,
                column: "CategoryImg",
                value: "/Images/Icon-T-Shirt.png");
        }
    }
}
