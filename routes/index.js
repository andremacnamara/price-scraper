import { getData } from '../lib/scraper.js'
import express from 'express';
const router = express.Router();

router.get('/', async ( req, res, next ) => {
    //const [items] = await Promise.all([getData()]);

    res.send('Hello');
})

module.exports = router;