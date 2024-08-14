# ArtStore E-commerce website
# 1. Project components
## 1.1. API
An API controller that has API endpoints
## 1.2. Infrastructure
Makes data access requests
Contains DbContext class to maintains connection with the database
## 1.3. Core
Stores entities

# Steps in VS Code
1. Create .Net projects: API, Core, Infrastructure.
   Setup dependencies for these projects (dotnet add referece).
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
5. Configure the entities for the migration (to fix the warning (about Price) when making migrations
   Override OnMdelCreating in StoreCOntext
   Add Config in Infrastructure
   Add migrations, update database
   Add a new SQL Server connection
6. Create a products controller
   Create API endpoints for product and test in Postman
