# ArtStore E-commerce website

# 1. Project components

## 1.1. API

An API controller that has API endpoints

## 1.2. Infrastructure

Makes data access requests
Contains DbContext class to maintains connection with the database

## 1.3. Core

Stores entities

# Steps in VS Code - C# .Net

1. Create .Net projects: API, Core, Infrastructure.
   Setup dependencies for these projects (dotnet add reference).
   Modify services, middlewares, project files, appsettings as needed.
2. Create first entity (product).
   Set up Entity Framework: Install nuget. Install EF SqlServer, Design in nuget
   Add DbContext, StoreContext.
   Add the service to program.cs
3. Set up SQL Server using Docker
   Create docker-compose.yml and run `docker compose up -d`
4. Connect to SqlServer
   Set up ConnectionStrings in appsettings
   Install nuget package `dotnet-ef`
5. Configure the entities for the migration to fix the warning (about Price) when making migrations
   Override OnModelCreating in StoreContext
   Add Config in Infrastructure
   Add migrations, update database
   Add a new SQL Server connection
6. Create a products controller
   Create API endpoints for product and test in Postman
7. Create Interface for ProductRepository in Core and its implementation class in Infrastructure
   Add scoped service to program.cs
8. Implement the repository methods
   Inject StoreContext to the repository class
   Update the product controller
9. Add seed data
10. Add Get authors, types; Filter products by author and type; Sort products by price
11. Create a generic repository
    Add service to program.cs
    Implement the generic repository methods
12. Set up specification classes
    Update the repository to use the specification
    Add sorting to the specification
13. Add projection to the specification
14. Create product spec parameters to improve the old filtering and sorting methods
15. Add pagination
    Add Take, Skip, IsPagingEnabled properties to the specification.
    Add ApplyPaging method.
    Set MaxPageSize, PageIndex, PageSize in ProductSpecParams.
    Add ApplyPaging method to ProductSpecification.
    Create Pagination class in RequestHelpers.
    Update ProductControllers.
16. Create BaseApiController to improve the API
17. Add search functionality
18. Error handling: to handle errors so we can configure theUI in the client for all errors generated by the API
    Add a test controller for error handling.
    Add a middleware to handle errors: return error as a JSON response
    Create a data transfer object CreateProductDto, add validation for Product properties

# Steps in VS Code - Angular

1. Install Angular CLI
2. Create Angular project
3. Set up VS Code for Angular
4. Set up Angular to use HTTPS
5. Add Angular Material and Tailwind CSS
6. Add components
   Add folders to Angular app: core, shared, features, layout
   Create components
7. Add a Header component
8. Make http requests
   Add provideHttpClient to app.config.ts
   Inject HttpClient in app.component.ts
   Implement OnInit in app.component.ts
9. Add product and pagination models in app/shared to use typescript types

# Concepts learned and practiced

## Repository pattern

## Generic repository

## Deferred execution
