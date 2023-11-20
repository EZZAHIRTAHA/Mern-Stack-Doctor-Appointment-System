const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT || 5000;
require("dotenv").config();
const colors = require('colors');
const connectDb = require('./db/config');
const router = require('./routes/UserRoutes');

app.use(express.json());
app.use('/api/users', router);

app.listen(PORT, () => {
    console.log('➜ Local:   '.bold + `http://localhost:${PORT}/`.cyan);
});

app.get("/", (req, res) => {
    res.send("<h2 style='text-align:center; color: cyan;'>Welcome to the server side!</h2>");
});

connectDb();
