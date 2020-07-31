import cron from 'node-cron';
import { runCron } from './scraper';

// cron.schedule('0 15 * * *', () => {
//     console.log('Running the cron');
//     runCron();
// })

cron.schedule('* 15 * * *', () => {
    console.log('Running the cron');
    runCron();
})