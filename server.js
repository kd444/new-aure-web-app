const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Search Endpoint
app.get("/search", (req, res) => {
    const query = req.query.query;
    // Process the search query
    res.send(`You searched for: ${query}`);
});

// Login Endpoint
app.post("/login", express.urlencoded({ extended: true }), (req, res) => {
    const { username, password } = req.body;
    // Simple authentication logic for demonstration
    if (username === "admin" && password === "password") {
        res.send("Login successful!");
    } else {
        res.status(401).send("Login failed. Invalid credentials.");
    }
});

// Hidden Data Endpoint
app.post("/hidden", express.urlencoded({ extended: true }), (req, res) => {
    const data = req.body.data;
    // Process the hidden data
    res.send(`Received hidden data: ${data}`);
});

// Restricted Area Endpoint
app.get("/restricted", (req, res) => {
    res.status(403).send(
        "Access denied. You are not authorized to view this page."
    );
});

// Start the server
const PORT = process.env.PORT || 3000; // Use port 80 for Azure
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
