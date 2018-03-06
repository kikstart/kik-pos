var router = require("express").Router();

// Load APIs for services
var authAPI = require("./auth");
var licenseAPI = require("./license");
var printAPI = require("./print");

// Assign APIs modularly
router.use("/auth", authAPI);
router.use("/license", licenseAPI);
router.use("/print", printAPI);

module.exports = router;