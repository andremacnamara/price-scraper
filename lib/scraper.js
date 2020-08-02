import axios from 'axios';
import cheerio from 'cheerio';
import db from './db.js';
const mongoose = require('mongoose');
const Item = mongoose.model('Item');

const listOfItems = [
    {'url': 'https://www.ralphlauren.ie/en/cotton-quarter-zip-sweater-3615731966197.html', 'titleSelector': 'h1.product-name', 'imageUrl': 'https://www.rlmedia.io/is/image/PoloGSI/s7-1303140_lifestyle?$rl_df_pdp_5_7_lif$'},
    {'url': 'https://www.ralphlauren.ie/en/slim-fit-mesh-polo-shirt-3615739612270.html', 'titleSelector': 'h1.product-name', 'imageUrl': 'https://www.rlmedia.io/is/image/PoloGSI/s7-1351620_lifestyle?$rl_df_pdp_5_7_lif$'}
]

async function getHTML(url){
    try {
        
        const { data: html } = await axios.get(url, {headers: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'}});
        return html;
    } catch(error){
        console.log(error);
    }
}

async function getItemPrice(html, titleSelector, imageSelector ){
    try {
        const $ = cheerio.load(html);
        let standardPrice = $('.product-price .js-product-standard-prices').val();
        let salePrice = $('.product-price .js-product-sales-price').val();
        const title = $(titleSelector).html().trim();
        const image = imageSelector;  
        const data = {standardPrice, salePrice, title, image};

        return data;
    } catch(error){
        console.log(error);
    }
}

export async function returnItemData(url, titleSelector, imageUrl){
    try {
        const html = await getHTML(url);
        const data = await getItemPrice(html, titleSelector, imageUrl);
        return data;
    } catch(error){
        console.log(error);
    }
}

export async function runCron() {
    console.log('Scraping');

    try {
        listOfItems.forEach(async item => {
            const [data] = await Promise.all([returnItemData(item.url, item.titleSelector, item.imageUrl)]);
            const objectToSave = {
                title: data.title,
                standardPrice: data.standardPrice,
                salePrice: data.salePrice,
                image: data.image,
                created: Date.now(),
            }

            await (new Item(objectToSave)).save();

        });
        console.log('Done')
    } catch(error){
        console.log(error);
    }
}

export async function getData(){
    try {
        const items = db.get('items').value();
        return items;
    } catch (error) {
        console.log(error);
    }
}

export { getHTML, getItemPrice, listOfItems }