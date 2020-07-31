import axios from 'axios';
import cheerio from 'cheerio';
import db from './db';

import { wait } from './utils'


const listOfItems = [
    {'url': 'https://www.ralphlauren.ie/en/cotton-quarter-zip-sweater-3615731966197.html', 'priceSelector': '.product-price span', 'titleSelector' : 'h1.product-name', 'imageSelector': '#product-details .popup-img.zoomable'},
    //{'url': 'https://www.ralphlauren.ie/en/slim-fit-mesh-polo-shirt-3615739612270.html', 'priceSelector': '.product-price span', 'titleSelector': '.product-top-content .produce-name', 'imageSelector': '#product-details .popup-img.zoomable'}
]

async function getHTML(url){
    try {
        
        const { data: html } = await axios.get(url, {headers: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'}});
        return html;
    } catch(error){
        console.log(error);
    }
}

async function getItemPrice(html, priceSelector, titleSelector, imageSelector ){
    try {
        const $ = cheerio.load(html);
        const price = $(priceSelector).html().trim().replace('&#x20AC;', "");
        const title = $(titleSelector).html().trim();
        const image = $('#product-details .popup-img').data('img');
        const data = {price, title, image};
        return data;
    } catch(error){
        console.log(error);
    }
}

export async function returnItemData(url, priceSelector, titleSelector, imageSelector){
    try {
        const html = await getHTML(url);
        const data = await getItemPrice(html, priceSelector, titleSelector, imageSelector);
        return data;
    } catch(error){
        console.log(error);
    }
}

export async function runCron() {
    console.log('Scraping');
  
    try { 
        wait(5000)
        listOfItems.forEach(async item => {
            const [price] = await Promise.all([returnItemData(item.url, item.priceSelector, item.titleSelector, item.imageSelector)]);
            //const price = 111;
            db.get('items')
                .push({
                    date: Date.now(),
                    item: price
                })
                .write()
        });
        console.log('Done')
    } catch(error){
        console.log(error);
    }
}

export { getHTML, getItemPrice, listOfItems,  }