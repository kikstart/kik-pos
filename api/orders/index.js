var router = require("express").Router();

// Load APIs for orders
var buyerOrderAPI = require("./buyer_order");
var supplierOrderAPI = require("./supplier_order");
var truckOrderAPI = require("./truck_order");

// Assign APIs modularly
router.use("/buyer", buyerOrderAPI);
router.use("/supplier", supplierOrderAPI);
router.use("/truck", truckOrderAPI);

module.exports = router;