const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT ||5000;
require("dotenv").config();
const colors = require('colors')


app.listen(PORT, () => {
    console.log(`Local:   http://localhost:${PORT}/`.cyan);
})

app.get("/", (req, res) => {
    res.send("<h2 style='text-align:center; color: cyan;'>Welcome to the server side !</h2>");
 });