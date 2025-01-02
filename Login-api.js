const express = require("express");
const bodyParser = require("body-parser");
const cors=require('cors');

const app = express();
const PORT = 5500;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors({
        origin: "http://localhost:3000", // Only allow requests from localhost:3000
        methods: ["GET", "POST", "PUT", "DELETE"], // Allow the necessary HTTP methods
        allowedHeaders: ["Content-Type"], // Allow Content-Type header
        credentials: true // Allow credentials (cookies, authorization headers)
      }));
      


// Dummy user data for demonstration
const users = [
    { email: "user1@gmail.com", password: "password123" },
    { email: "user2@gmail.com", password: "mypassword" }
];

// Login endpoint
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    // Check if user exists
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        return res.status(200).json({ message: "Login successful", email });
    } else {
        return res.status(401).json({ error: "Invalid email or password" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
