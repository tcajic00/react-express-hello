const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

var content = "";

app.get("/helloguest", (req, res) => {
    res.status(200).json('Hello, Guest!');
});

app.get("/hellotome", (req, res) => {
    res.status(200).json('Hello, Tome!');
});

app.get("/helloante", (req, res) => {
    res.status(200).json("Hello, Ante!");
});

app.get("/hellofabijan", (req, res) => {
    res.status(200).json("Hello, Fabijan!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
