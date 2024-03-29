# Property Consultation

Property Consultation is a back-end application designed to facilitate the consultation, registration, and management of property information. This application allows users to add, view, update, and delete property details, as well as search for available properties based on different criteria.

## Features

- **Property Registration**: Allows users to add new properties to the system, including details such as location, price, description, and availability status.
- **Property Consultation**: Users can view the list of registered properties, with options to filter the search by price, location, and availability status.
- **Information Update**: Enables the updating of details for an already registered property.
- **Property Removal**: Users can remove properties from the system.

## Technologies Used

- Node.js
- Express
- PostgreSQL (optionally, depending on the data storage implementation)

## Installation

To install and run Property Consultation locally, follow the steps below:

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/property-consultation.git
cd property-consultation
```

2. **Install Dependencies**

```bash
npm install

```

# Configure the Environment

Create a .env file at the project root and add the necessary environment variables for configuration, such as database connection information.

Example .env:

bash
Copy code
DATABASE_URL=postgresql://user:password@localhost:5432/databaseName

# Run the Application

bash
Copy code
npm run dev
The application will be running at http://localhost:3000.

# Usage

Detail here how to use the application, including examples of HTTP requests for each of the functionalities offered.

# Contribution

Contributions are always welcome! To contribute, please create a fork of the repository, make your changes, and submit a Pull Request.

# License

MIT
