var router = require("express").Router();

router.get("/:id", function(req, res) {
    // Get consumer info and return it as JSON
    res.send("Not Implemented");
});

router.post("/:id", function(req, res) {
    // Insert consumer info and return result
    res.send("Not Implemented");
});

router.put("/:id", function(req, res) {
    // Replace consumer info if exists
    res.send("Not Implemented");
});

router.patch("/:id", function(req, res) {
    // Update consumer info if exists
    res.send("Not Implemented");
});

module.exports = router;