import axios from 'axios';
import cheerio from 'cheerio';

const listOfItems = [
    {'url': 'https://www.ralphlauren.ie/en/cotton-half-zip-jumper-506761.html?', 'priceSelector': '.product-price span'},
    {'url': 'https://www.ralphlauren.ie/en/custom-slim-fit-cotton-t-shirt-414810.html', 'priceSelector': '.product-price span'}
]

// READ THIS
// https://www.techighness.com/post/scrape-website-data-using-node-js-without-headless-browser/


async function getHTML(url){
    const { data: html } = await axios.get(url, {headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'}});
    return html;
}

async function getItemPrice(html, priceSelector){
    const $ = cheerio.load(html);
    const price = $(priceSelector);
    return price.html().trim().replace('&#x20AC;', "");
}


export { getHTML, getItemPrice, listOfItems }