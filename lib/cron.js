const cron = require('node-cron');
const { runCron } = require('./scraper');

cron.schedule('* 15 * * *', () => {
    console.log('Running the cron');
    runCron();
});