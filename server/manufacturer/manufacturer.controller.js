const express = require('express')
const routerRegistry = require('../common').routerRegistry

const router = express.Router()

router.get("/:id", function(req, res) {
    // Get manufacturer info and return in JSON
    res.send("Not Implemented");
});

router.post("/:id", function(req, res) {
    // Insert manufacturer info and return result
    res.send("Not Implemented");
});

router.put("/:id", function(req, res) {
    // Replace manufacturer info if exists
    res.send("Not Implemented");
});

router.patch("/:id", function(req, res) {
    // Update manufacturer info if exists
    res.send("Not Implemented");
});

routerRegistry.registerRouter('/manufacturers', router)