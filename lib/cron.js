import cron from 'node-cron';
import { runCron } from './scraper.js';

cron.schedule('0 13 * * *', () => {
    console.log('Running the cron');
    runCron();
})

cron.schedule('* 12 * * *', () => {
    console.log('Running the cron');
    runCron();
})