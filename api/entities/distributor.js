var router = require("express").Router();

router.get("/:id", function(req, res) {
    // Get distributor info and return it as JSON
    res.send("Not Implemented");
});

router.post("/:id", function(req, res) {
    // Insert distributor info and return result
    res.send("Not Implemented");
});

router.put("/:id", function(req, res) {
    // Replace distributor info if exists
    res.send("Not Implemented");
});

router.patch("/:id", function(req, res) {
    // Update distributor info if exists
    res.send("Not Implemented");
});

module.exports = router;