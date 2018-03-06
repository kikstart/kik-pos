var router = require("express").Router();

router.get("/:id", function(req, res) {
    // Get buyer order and return in JSON
    res.send("Not Implemented");
});

router.post("/:id", function(req, res) {
    // Insert buyer order and return result
    res.send("Not Implemented");
});

router.put("/:id", function(req, res) {
    // Replace buyer order if exists
    res.send("Not Implemented");
});

router.patch("/:id", function(req, res) {
    // Update buyer order if exists
    res.send("Not Implemented");
});

module.exports = router;