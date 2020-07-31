import express from 'express.js';

import { listOfItems, returnItemData } from './lib/scraper.js'
import { wait } from './lib/utils.js'
import './lib/cron.js'
const items = require('./db.json')

const app = express();

app.get('/scrape', async (req, res, next) => {
    res.json({'status': 'Add in a live count'})
})

app.get('/', ( req, res, next ) => {
    res.json({items})
})

const server = app.listen(2300, () => {
    console.log(`Scraper is running on port: ${server.address().port}`);
});