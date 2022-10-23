const req = require("express/lib/request");
const res = require("express/lib/response");
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        usuario: 'oscar'
    })
});

router.post("/", (req, res) => {
    const body = req.body;
    res.status(201).json({
        message: 'created',
        data: body,
    })
});

module.exports = router;

