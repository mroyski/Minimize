using Microsoft.EntityFrameworkCore.Migrations;

namespace Minimize.Migrations
{
    public partial class AddImg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CategoryImg",
                table: "Categories",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 1,
                column: "CategoryImg",
                value: "/Images/Icon-T-Shirt.png");

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "CategoryId", "CategoryDescription", "CategoryImg", "CategoryName" },
                values: new object[] { 2, "Junk Furniture", "/Images/Furniture_Icon_1.png", "Furniture" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "CategoryId", "PostDescription", "PostImgPath", "RemovedItems", "TotalItems" },
                values: new object[] { 2, 2, "Lickies and Chewies", "/Images/Junk.jpg", 65, 15 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 2);

            migrationBuilder.DropColumn(
                name: "CategoryImg",
                table: "Categories");
        }
    }
}
