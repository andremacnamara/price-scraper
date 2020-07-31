import { getHTML, getItemPrice, listOfItems } from './lib/scraper'

const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

async function go(url, priceSelector) {
    const pricePromise = getHTML(url);
    const [ priceHTML ] = await Promise.all([pricePromise]);

    const price = await getItemPrice(priceHTML, priceSelector);
    console.log(`The price is ${price}`);
    await wait(3000);
}

listOfItems.forEach(item => {
    go(item.url, item.priceSelector);
});

// go();