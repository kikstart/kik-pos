var router = require("express").Router();

router.get("/:id", function(req, res) {
    // Get retailer info and return in JSON
    res.send("Not Implemented");
});

router.post("/:id", function(req, res) {
    // Insert retailer info and return result
    res.send("Not Implemented");
});

router.put("/:id", function(req, res) {
    // Replace retailer info if exists
    res.send("Not Implemented");
});

router.patch("/:id", function(req, res) {
    // Update retailer info if exists
    res.send("Not Implemented");
});

module.exports = router;