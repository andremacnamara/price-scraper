const getData = require('../lib/scraper.js');
const express = require('express');
const router = express.Router();

router.get('/', async ( req, res, next ) => {
    //const [items] = await Promise.all([getData()]);

    res.send('Hello');
})

module.exports = router;