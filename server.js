const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const escapeStringRegexp = require("escape-string-regexp");
const https = require("https");
const fs = require("fs");

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

// Middleware to sanitize query parameters before they reach index.js
app.use((req, res, next) => {
    for (let key in req.query) {
        req.query[key] = escapeStringRegexp(req.query[key]); 
    }
    for (let key in req.params) {
        req.params[key] = escapeStringRegexp(req.params[key]);
    }
    next();
});

// route
app.get("/", (req, res) => {
    res.send("Who will win the Grammys??");
})

app.use("/api/v1/shows", showsRoutes);

// Use HTTPS server instead of HTTP
https.createServer(options, app).listen(port, () => {
    console.log(`Secure server running on port ${port}`);
});