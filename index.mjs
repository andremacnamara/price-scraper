import express from 'express';

import { listOfItems, returnItemData, getData } from './lib/scraper.mjs'
import { wait } from './lib/utils.mjs'
import './lib/cron.mjs'

const app = express();

app.get('/scrape', async (req, res, next) => {
    res.json({'status': 'Add in a live count'})
})

app.get('/', async ( req, res, next ) => {
    const [items] = await Promise.all([getData()]);
    // items.forEach(item => {/
    //     item.date = new Date(item.date);
    // });

    res.json({items})
})


const server = app.listen(2300, () => {
    console.log(`Scraper is running on port: ${server.address().port}`);
});