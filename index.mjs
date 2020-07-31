import express from 'express';

import { listOfItems, returnItemData } from './lib/scraper.mjs'
import { wait } from './lib/utils.mjs'
import './lib/cron.mjs'

const app = express();

app.get('/scrape', async (req, res, next) => {
    res.json({'status': 'Add in a live count'})
})

app.get('/', ( req, res, next ) => {
    res.json({'items'})
})

// app.get('/items', ( req, res, next ) => {
//     res.render({items})
// })

const server = app.listen(2300, () => {
    console.log(`Scraper is running on port: ${server.address().port}`);
});