using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdateDeliveryMethods : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "586d226d-32dd-4e6d-8d44-32ebf3f6bb43");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5a2d6f1b-b40b-4934-a838-ad00580301ed");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "93235e26-05a0-4bcd-bbce-881bae3db6cf", null, "Admin", "ADMIN" },
                    { "eb762467-b8ce-41ad-8ee2-b87c5061d1bc", null, "Customer", "CUSTOMER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "93235e26-05a0-4bcd-bbce-881bae3db6cf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "eb762467-b8ce-41ad-8ee2-b87c5061d1bc");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "586d226d-32dd-4e6d-8d44-32ebf3f6bb43", null, "Admin", "ADMIN" },
                    { "5a2d6f1b-b40b-4934-a838-ad00580301ed", null, "Customer", "CUSTOMER" }
                });
        }
    }
}
