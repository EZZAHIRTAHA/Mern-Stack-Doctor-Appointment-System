const { getDoctors } = require("../controllers/DoctorController");
const express = require("express");
const router = express.Router();



router.get('/', getDoctors);


module.exports = router;