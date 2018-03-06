var router = require("express").Router();

router.get("/find", function(req, res) {
    // Get truck order and return in JSON
    res.send("Not Implemented");
});

router.get("/:id", function(req, res) {
    // Get truck order and return in JSON
    res.send("Not Implemented");
});

router.post("/:id", function(req, res) {
    // Insert truck order and return result
    res.send("Not Implemented");
});

router.put("/:id", function(req, res) {
    // Replace truck order if exists
    res.send("Not Implemented");
});

router.patch("/:id", function(req, res) {
    // Update truck order if exists
    res.send("Not Implemented");
});

module.exports = router;