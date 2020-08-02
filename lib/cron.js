const cron = require('node-cron');
const runCron = require('./scraper.js');

cron.schedule('0 14 * * *', () => {
    console.log('Running the cron');
    runCron();
})

// cron.schedule('* 13 * * *', () => {
//     console.log('Running the cron');
//     runCron();
// })