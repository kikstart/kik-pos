var router = require("express").Router();

router.get("/:id", function(req, res) {
    // Get wholesaler info and return in JSON
    res.send("Not Implemented");
});

router.post("/:id", function(req, res) {
    // Insert wholesaler info and return result
    res.send("Not Implemented");
});

router.put("/:id", function(req, res) {
    // Replace wholesaler info if exists
    res.send("Not Implemented");
});

router.patch("/:id", function(req, res) {
    // Update wholesaler info if exists
    res.send("Not Implemented");
});

module.exports = router;