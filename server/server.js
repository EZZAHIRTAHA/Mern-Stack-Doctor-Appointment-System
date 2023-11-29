const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT || 5000;
require("dotenv").config();
const colors = require('colors');
const connectDb = require('./db/config');
const router = require('./routes/UserRoutes');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/api/user', router);

app.listen(PORT, () => {
    console.log('➜ Local:   '.bold + `http://localhost:${PORT}/`.cyan);
});

app.get("/", (req, res) => {
    res.send("<h2 style='text-align:center;letter-spacing:2px; color: #1890ce; font-weight:4;'>Welcome to AKDITAL server!</h2>");
});

connectDb();