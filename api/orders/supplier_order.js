var router = require("express").Router();

router.get("/:id", function(req, res) {
    // Get supplier order and return in JSON
    res.send("Not Implemented");
});

router.post("/:id", function(req, res) {
    // Insert supplier order and return result
    res.send("Not Implemented");
});

router.put("/:id", function(req, res) {
    // Replace supplier order if exists
    res.send("Not Implemented");
});

router.patch("/:id", function(req, res) {
    // Update supplier order if exists
    res.send("Not Implemented");
});

module.exports = router;