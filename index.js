const express = require('express')
const { listOfItems, returnItemData } = require('./lib/scraper');
const { wait } = require('./lib/utils');
require('./lib/cron');
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