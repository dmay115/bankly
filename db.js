/** Database setup for bankly. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

// Use DB_URI for a cleaner configuration
const connectionString =
    process.env.NODE_ENV === "production"
        ? DB_URI
        : `postgresql://derek:new_password@localhost:5432/bankly${
              process.env.NODE_ENV === "test" ? "_test" : ""
          }`;

// Create a new client with environment-based settings
const db = new Client({
    connectionString,
    ssl:
        process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false, // Disable SSL for non-production environments
});

// Connect to the database
db.connect()
    .then(() => console.log("Connected to the database!"))
    .catch((err) => console.error("Database connection error:", err.stack));

// Export the client instance for use in other files
module.exports = db;
