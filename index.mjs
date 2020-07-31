import express from 'express';

import { listOfItems, returnItemData, getData } from './lib/scraper.mjs'
import { wait } from './lib/utils.mjs'
//import './lib/cron.mjs'

const app = express();

app.get('/scrape', async (req, res, next) => {
    res.json({'status': 'Add in a live count'})
})

app.get('/', async ( req, res, next ) => {
    const [items] = await Promise.all([getData()]);
    // items.forEach(item => {
    //     item.date = new Date(item.date);
    // });

    res.json({items})
})

app.get('/items', async ( req, res, next ) => {
    const [items] = await Promise.all([returnItemData('https://www.ralphlauren.ie/en/cotton-quarter-zip-sweater-3615731966197.html', '.product-price span', 'h1.product-name', '#s7viewer-main .popup-img.zoomable')]);
    console.log(items)
    res.json({'status': 'ff'})
})

const server = app.listen(2300, () => {
    console.log(`Scraper is running on port: ${server.address().port}`);
});