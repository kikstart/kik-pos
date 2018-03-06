var router = require("express").Router();

// Load APIs for entities
var consumerAPI = require("./consumer");
var distributorAPI = require("./distributor");
var manufacturerAPI = require("./manufacturer");
var retailerAPI = require("./retailer");
var wholesalerAPI = require("./wholesaler");

// Assign APIs modularly
router.use("/consumer", consumerAPI);
router.use("/distributor", distributorAPI);
router.use("/manufacturer", manufacturerAPI);
router.use("/retailer", retailerAPI);
router.use("/wholesaler", wholesalerAPI);

module.exports = router;