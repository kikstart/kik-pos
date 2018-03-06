var router = require("express").Router();

router.get("/:id", function(req, res) {
    // Get user and return in JSON
    res.send("Not Implemented");
});

router.post("/:id", function(req, res) {
    // Insert user and return result
    res.send("Not Implemented");
});

router.put("/:id", function(req, res) {
    // Replace user if exists
    res.send("Not Implemented");
});

router.patch("/:id", function(req, res) {
    // Update user if exists
    res.send("Not Implemented");
});

module.exports = router;