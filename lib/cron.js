const cron = require('node-cron');
const runCron = require('./scraper.js');
const report = require('../controllers/reportController.js');

cron.schedule('0 09 * * *', () => {
    console.log('Running the scrape cron');
    runCron();
});

cron.schedule('10 09 * * *', () => {
    console.log('Running the email cron');
    report.sendReport();
});