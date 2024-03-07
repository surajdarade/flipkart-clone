# Flipkart Clone - MERN Project

This project is an emulation of Flipkart's eCommerce platform, developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It's crafted to showcase the functionality and features of a contemporary eCommerce website.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Contribution](#contribution)

## Features

- **User Authentication and Authorization:** Integrate user registration, login, and JWT-based authorization for secure access to user-specific data.

- **Product Catalog:** Present products with categories and furnish a search functionality for users to swiftly locate products.

- **Shopping Cart Management:** Enable users to add and remove products from their carts, view cart contents, save for later, and proceed to checkout.

- **Secure Payment Processing (Stripe Integration):** Implement Stripe payment gateway for secure and convenient online payments. Users can complete purchases using credit/debit cards.

- **User Order History and Order Management:** Retain user order history and offer a user-friendly interface for order management, including order status and tracking.

- **Admin Panel for Product Management:** Admin users can oversee product listings, categories, and view orders. Accessible via `/admin/dashboard` route (login required).

- **Responsive Design with Tailwind CSS and Material UI:** Utilize Tailwind CSS and Material UI for responsive and visually captivating user interfaces on both mobile and desktop devices.

- **Password Encryption using Bcrypt:** Securely store user passwords by hashing and salting them using the bcrypt library.

- **Image Storage with Cloudinary:** Utilize Cloudinary for efficient storage and retrieval of product images.

## Prerequisites

Before you begin, ensure you have met the following prerequisites:

- Node.js and npm installed
- MongoDB instance (local or remote)
- Stripe API key (for payment processing)
- Cloudinary account and API credentials

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/surajdarade/flipkart-clone.git
   ```

2. Navigate to the project directory:

   ```bash
   cd flipkart-clone
   ```

3. Install server dependencies:

   ```bash
   npm install
   ```

4. Navigate to the client directory:

   ```bash
   cd client
   ```

5. Install client dependencies:

   ```bash
   npm install
   ```

6. Create a `.env` file in the server root and add your environment variables:

   ```env
   #MONGODB
    MONGODB_URI = "mongodb://localhost:27017/flipkart"

    #PORT
    PORT = 4000

    # JWT Credentials
    JWT_SECRET  = "your_jwt_secret"

    # Cloudinary Credentials
    CLOUD_NAME = "your_cloud_name"
    CLOUD_API_KEY = "your_cloudinary_apo"
    CLOUD_SECRET = "your_cloudinary_secret"

    #STRIPE Credentials
    STRIPE_API_KEY = "your_stripe_api_key"

    #NODE Environment
    NODE_ENV = "development"
   ```

7. Return to the project root:

   ```bash
   cd ..
   ```

## Usage

1. Start the server:

   ```bash
   nodemon server.js
   ```

2. Start the client:

   ```bash
   npm run dev
   ```

3. Visit `http://localhost:5173` in your browser to access the Flipkart clone.

4. You can access the admin panel at `http://localhost:5173/admin/dashboard` (login required).

## Contributing

Contributions are warmly embraced! Let's collaborate to enhance this project together!
