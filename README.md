# ArtStore E-commerce website

# 1. Project components

## 1.1. API

An API controller that has API endpoints

## 1.2. Infrastructure

Makes data access requests
Contains DbContext class to maintains connection with the database

## 1.3. Core

Stores entities

# 2. Steps in VS Code

## Create .Net projects

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

## API Architecture

7. Create Interface for ProductRepository in Core and its implementation class in Infrastructure
   Add scoped service to program.cs
8. Implement the repository methods
   Inject StoreContext to the repository class
   Update the product controller
9. Add seed data
10. Add Get authors, types; Filter products by author and type; Sort products by price

## The specification pattern

11. Create a generic repository
    Add service to program.cs
    Implement the generic repository methods
12. Set up specification classes
    Update the repository to use the specification
    Add sorting to the specification
13. Add projection to the specification

## Add Sort, Filter, Search, Pagination

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
18. Error handling: to handle errors so we can configure the UI in the client for all errors generated by the API
    Add a test controller for error handling.
    Add a middleware to handle errors: return error as a JSON response
    Create a data transfer object CreateProductDto, add validation for Product properties

## Angular Setup

19. Install Angular CLI
20. Create Angular project
21. Set up VS Code for Angular
22. Set up Angular to use HTTPS
23. Add Angular Material and Tailwind CSS
24. Add components
    Add folders to Angular app: core, shared, features, layout
    Create components
25. Add a Header component
26. Make http requests
    Add provideHttpClient to app.config.ts
    Inject HttpClient in app.component.ts
    Implement OnInit in app.component.ts
27. Add product and pagination models in app/shared to use typescript types

## Build the User Interface for the shop

28. Add shop service to get products from API
    Move codes from the component to the service
29. Add product item component
30. Add filtering functionality using Material Dialog
31. Add sorting functionality
32. Add shopParams model to supply parameters for the API request
33. Add pagination to the client using Material
34. Add search functionality to the client

## Angular routing

35. Create home, product details components and routes
36. Set up links in the app
37. Design the product details page

## Client side error handing and loading

38. Create a test error component
39. Create NotFound and Server Error components
40. Create an HTTP Interceptor for handling API errors
41. Add toast(snackbar) notifications
42. Handle validation errors from the API
43. Configure Server Error, Not Found pages
44. Handle loading:
    Add an HTTP Interceptor for loading
    Add a progress bar to indicate loading
    Make the header fixed to the top

## API - Shopping Cart

45. Create API for Shopping Cart
    Create Redis instance to use in the app. Use Redis database because customer shopping cart is still saved in the server but the number of requests to the server is reduced. Redis captures data every minute so customer might loose some items in cart but it's easy for them to add the items back.
    Add Redis to the project.
    Create CartItem, ShoppingCart classes
    Create Cart service, Cart controller
    Test the Cart in Postman

## Client - Shopping Cart

46. Add the cart feature to the angular app.
    Learn to use signals in Angular
47. Create cart components
    Install nanoid
48. Add the Cart service methods
49. Add an item to the cart
50. Use add item functionality in the product item
51. Persist the cart
52. Update the nav bar with the cart item count
53. Create order summary component
54. Create tje order totals
55. Add more functions the the service: add, remove, delete items with quantity
    Add these to the cart
56. Add the update cart functionality to the product details
57. Create the checkout components for future

## API - Identity

To implement ASP.NET Identity to allow clients to login and register to the app and receive a Cookie which can be used to authenticate against certain classes/methods in the API

58. Set up Identity
    Install Identity.Stores extension in nuget to Core project and Identity.EntityFrameworkCore to Infrastructure project
59. Update the DB and test the endpoints
60. Add a custom register end point. (To add more user info)
61. Test the authentication
62. Create additional user endpoints
63. Create extension methods
64. Validation errors
65. Add a user address class
66. Add an endpoint to update the user address

## Client - Identity

67. Create the account components
68. Create the login form
69. Update the account service to the header component
70. Persist the login
    Inject accountService to the init service
71. Add an auth interceptor
    To send cookie automatically to the server for any requests that need authentication
72. Add an Angular Material Menu
    To have options for the user to navigate the web or logout
73. Add the register form
    Add form validation
    Create a re-usable text input to improve the form
74. Create an auth guard
75. Add an empty cart guard
76. Add an empty state component: for the checkout page when the cart is empty

## API & Client Checkout

To make the app able to accept payments securely using Stripe

77. Create the delivery methods in the API (Core)
78. Set up Stripe
79. Implement the payment intent
80. Create a payment controller
81. Add checkout page layout
82. Add client side Stripe
83. Create the address element
84. Populate the address in the address form
85. Save the address as default address
86. Create the delivery component
87. Create the payment element
88. Create the review component
89. Validate step completion
90. Create a Stripe confirmation token
91. Update the review component with the token information
92. Confirm the payment
93. Add Loading and error notifications
94. Add Checkout success page (temp)

## API - Orders

95. Create the order aggregate
96. Configure the order entities
97. Implement Unit of work
98. Create the order controller
99. Add the get order method
100.  Update the spec for eager loading
101.  Update the controller to eagerly load in the get methods
102.  Shape the data to return

## Orders and Payments

103. Create the order components
104. Submit the order
105. Design the order component to display orders
106. Create the order detailed page
107. Update the address pipe with type guards
108. Add a webhook to endpoint in the payments controller
109. Use Stripe CLI to test the webhook
110. Add SignalR to the API
111. Add SignalR to the client
112. Update the checkout success page
113. Add a guard to the checkout success
114. Add the home page component style

## Publish to Azure

115. Prepare the client app for publishing
116. Prepare the .Net app for publishing
117. Set up Redis server on upstash.com
118. Configure the web app on Azure
119. Create a Azure DB
120. Publish the app to Azure
121. Add Continuos integration using github actions
122. Troubleshoot Azure issues
     Problem with the API version of Stripe webhook
123. Make the empty state component reusable
124. Update CI to also build the angular app
     The app will be deployed to Azure automatically when a new commit is pushed to the main branch, without the need of using ng build in the IDE

## Add the Coupons functionality

125. Create the Coupon entity in Core and update the related entities
126. Create CouponService in Infrastructure
127. Refactor and update PaymentIntentService
128. Update OrderConfiguration and create new EF migrations to update DB schema
129. Update API Project
130. Update Client Project

# 3. Things learned and practiced

- Repository pattern

- Generic repository

- Deferred execution

- Angular: Signals

- Aggregate entities

- Owned entities

- Unit of work

- Webhooks

- SignalR
