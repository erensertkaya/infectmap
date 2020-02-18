const express = require('express');
const router = express.Router();

const Wuhan = require('../models/Wuhan');

router.get('/', (req, res, next) => {
    const data = Wuhan.findOne().sort({ _id: -1 });
    data.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    })
});

module.exports = router;
