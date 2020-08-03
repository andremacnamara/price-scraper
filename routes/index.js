const getData = require('../lib/scraper.js');
const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');


router.get('/', async ( req, res, next ) => {
    //const [items] = await Promise.all([getData()]);

    res.send('Hello');
})

router.get('/send-report', reportController.sendReport);


module.exports = router;