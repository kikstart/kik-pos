var router = require("express").Router();

// Load APIs
var entitiesAPI = require("./entities/index");
var ordersAPI = require("./orders/index");
var servicesAPI = require("./services/index");

// Assign APIs modularly
router.use("/entities", entitiesAPI);
router.use("/orders", ordersAPI);
router.use("/services", servicesAPI);

module.exports = router;