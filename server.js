const express = require("express");
const showsRoutes = require("./src/accounts/routes");

const app = express();
const port = 3005;

app.use(express.json());
const cors = require("cors");
app.use(cors( {
    origin: '*'
}));

// route
app.get("/", (req, res) => {
    res.send("Who will win the Grammys??");
})

app.use("/api/v1/shows", showsRoutes);

app.listen(port, () => console.log('running on ${port}'));