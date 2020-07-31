import cron from 'node-cron.js';
import { runCron } from './scraper.js';

// cron.schedule('0 15 * * *', () => {
//     console.log('Running the cron');
//     runCron();
// })

cron.schedule('* 15 * * *', () => {
    console.log('Running the cron');
    runCron();
})