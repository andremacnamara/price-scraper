import express from 'express';

import { listOfItems, returnItemData } from './lib/scraper'
import { wait } from './lib/utils'
import './lib/cron'
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