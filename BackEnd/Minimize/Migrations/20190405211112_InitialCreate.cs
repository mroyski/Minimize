using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Minimize.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    CategoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CategoryName = table.Column<string>(nullable: true),
                    CategoryDescription = table.Column<string>(nullable: true),
                    CategoryImg = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    PostId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    TotalItems = table.Column<int>(nullable: false),
                    RemovedItems = table.Column<int>(nullable: false),
                    PostDescription = table.Column<string>(nullable: true),
                    PostImgPath = table.Column<string>(nullable: true),
                    CategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.PostId);
                    table.ForeignKey(
                        name: "FK_Posts_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "CategoryId", "CategoryDescription", "CategoryImg", "CategoryName" },
                values: new object[,]
                {
                    { 1, "Clothes", "tshirt", "Clothing" },
                    { 2, "Junk Furniture", "couch", "Furniture" },
                    { 3, "Toolbox", "tools", "Tools" },
                    { 4, "Computers, phones", "laptop", "Electronics" },
                    { 5, "Fun stuff", "truck-monster", "Toys" },
                    { 6, "Other stuff", "question", "Misc" }
                });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "CategoryId", "PostDescription", "PostImgPath", "RemovedItems", "TotalItems" },
                values: new object[] { 1, 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum tortor sed metus sollicitudin, ut malesuada quam ultrices. Nullam quis dui fringilla, eleifend mi in, pharetra neque. Sed iaculis, urna quis pulvinar scelerisque, nunc justo fringilla lectus, quis dictum ligula libero et enim. Nunc pharetra, diam ac tristique rutrum, neque ligula lacinia nibh, vehicula lacinia tellus velit quis orci. Phasellus dui enim, pulvinar quis rhoncus eget, elementum finibus risus. Integer bibendum leo ac felis sodales viverra. Aenean tincidunt felis ut orci tristique consequat. In quam elit, blandit non pretium et, feugiat et nisl. Vestibulum ac luctus leo.", "/Images/Junk.jpg", 15, 32 });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "CategoryId", "PostDescription", "PostImgPath", "RemovedItems", "TotalItems" },
                values: new object[] { 2, 2, "Lickies and Chewies", "/Images/Junk.jpg", 65, 15 });

            migrationBuilder.CreateIndex(
                name: "IX_Posts_CategoryId",
                table: "Posts",
                column: "CategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
