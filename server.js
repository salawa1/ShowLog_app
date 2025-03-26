const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const { query, param, validationResult } = require("express-validator");

// Load SSL Certificate and Private Key
const options = {
    key: fs.readFileSync("./ssl/key.pem"),
    cert: fs.readFileSync("./ssl/cert.pem") 
};

// Routes
const showsRoutes = require("./src/shows/routes");

const app = express();
const port = 3005;

app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: '*'
}));

// Middleware to validate input before passing to index.js
app.use([
    query("search").optional().isString().trim().escape(),
    param("id").optional().isInt(), 
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
});

// Default route
app.get("/", (req, res) => {
    res.send("Who will win the Grammys??");
});

app.use("/api/v1/shows", showsRoutes);

// Use HTTPS server instead of HTTP
https.createServer(options, app).listen(port, () => {
    console.log(`Secure server running on port ${port}`);
});