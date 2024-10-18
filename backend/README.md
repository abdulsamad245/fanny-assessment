# Ecommerce RESTful API

This project is an Ecommerce API built with Node.js, Express, and MongoDB. It provides a backend service for managing user authentication, cart functionality, and product management.

## Base URL

The base URL for all API endpoints:

```
https://crud-notes-api.onrender.com/api
```

## Features

- **User Registration and Login**
- **Product Management**: Create, update, delete, and search products
- **Cart Management**: Add, subtract, and remove products from the cart
- **Authentication**: Using JWT for secure login and session management

## Technologies Used

- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **JWT (Json Web Token)**
- **Bcrypt.js**
- **HTTP-Status**

## API Endpoints

### User Authentication

#### Register
- **POST /auth/register**
- Registers a new user.
- Request Body:
  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@example.com",
    "password": "password123",
    "confirm_password": "password123"
  }
  ```
- Response: Registered user details.

#### Login
- **POST /auth/login**
- Logs in an existing user and returns a JWT token.
- Request Body:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- Response:
  ```json
  {
    "token": "JWT token",
    "email": "johndoe@example.com"
  }
  ```

#### Logout
- **POST /auth/logout**
- Logs out a user.

---

### Product Management

#### Create Product
- **POST /products**
- Adds a new product.
- Request Body:
  ```json
  {
    "name": "Laptop",
    "category": "Electronics",
    "brand": "BrandName",
    "price": 999,
    "quantity": 10,
    "model": "ModelXYZ",
    "specification": "Some specification"
  }
  ```
- Response: Created product details.

#### Get Product
- **GET /products/:id**
- Gets product details by ID.

#### Update Product
- **PUT /products/:id**
- Updates an existing product.
- Request Body:
  ```json
  {
    "name": "Updated Product Name",
    "brand": "Updated Brand"
  }
  ```
- Response: Updated product details.

#### Delete Product
- **DELETE /products/:id**
- Deletes a product by ID.

#### List Products
- **GET /products**
- Lists all products with optional filters for category and brand.
- Query Parameters:
  - `category` (optional): Filter by category
  - `brand` (optional): Filter by brand
  - `limit`: Limit the number of returned products
  - `skip`: Skip a number of products

#### Search Products
- **GET /products/search**
- Search for products by name, category, or brand.
- Query Parameters:
  - `text`: The search query

---

### Cart Management

#### Add to Cart
- **POST /cart/add**
- Adds a product to the user's cart.
- Request Body:
  ```json
  {
    "email": "johndoe@example.com",
    "product_id": "product123",
    "qty": 1
  }
  ```

#### Subtract from Cart
- **POST /cart/subtract**
- Subtracts a product from the user's cart.
- Request Body:
  ```json
  {
    "email": "johndoe@example.com",
    "product_id": "product123",
    "qty": 1
  }
  ```

#### Get Cart
- **GET /cart**
- Retrieves the cart for a user.
- Query Parameters:
  - `email`: The user's email

#### Remove Cart
- **DELETE /cart**
- Deletes the user's cart.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14.x or higher)
- **MongoDB** (v4.x or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone git clone https://github.com/abdulsamad245/fanny-assessment.git
   cd ecommerce-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file with the following values:

   ```env
   MONGO_URI=mongo_uri
   JWT_SECRET=your_secret_key
   JWT_EXPIRES_IN=7d
   ```

4. Start the server:

   ```bash
   npm start
   ```

## License

This project is licensed under the MIT License.
