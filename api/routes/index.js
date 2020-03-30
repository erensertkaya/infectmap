const express = require('express');
const router = express.Router();
const cors = require('cors');

const Corona = require('../models/Corona');
const CoronaTotal = require('../models/CoronaTotal');

router.get('/', cors(), (req, res, next) => {
    const data = Corona.findOne().sort({_id: -1});
    data.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    })
});
router.get('/world', cors(), (req, res, next) => {
    const data = CoronaTotal.findOne().sort({_id: -1});
    data.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    })
});

router.get('/world/ratio', cors(), (req, res, next) => {
    const data = CoronaTotal.findOne().sort({_id: -1});
    data.then((data) => {
        data.entries.map((item,index) => {
            const cases = item.case.replace(',','.');
            const recovered = item.recovered.replace(',', '.');
            const death = item.death.replace(',','.');
            const unresolved = item.unresolved.replace(',','.');
            const recoveredRatio = ((recovered / cases) * 100).toFixed(2)+ '%';
            const deathRatio = ((death / cases) * 100).toFixed(2)+ '%';
            const unresolvedRatio = ((unresolved / cases) * 100).toFixed(2) + '%';
            const caseRatio = "100%";

            res.json({caseRatio:caseRatio,recoveredRatio:recoveredRatio,deathRatio:deathRatio,unresolvedRatio:unresolvedRatio});
        })
    }).catch((err) => {
        res.json(err)
    })
});
module.exports = router;
