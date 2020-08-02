// import db from './db.js';

// // Return time value for the start of given date, default is today
// function convertDateTime(datetime = Date.now()){
//     return new Date(datetime).toISOString().split('T')[0];
// }

//   // Run as for 1 Aug 2020
  

// export async function report(){
//     try {
//         const items = db.get('items').value();
//         items.forEach(item => {
//             item.price = parseInt(item.price);
//         });

//         const prices = items.reduce((a,c) => (
//             (a[c.title] = a[c.title] || []).push(
//                 { 
//                     d:new Date(c.date),
//                     p:c.price
//                 }
//             ),a), {});

//         Object.values(prices).forEach(el=>el.forEach((e,i,a)=>{if(i) e.change=(100*e.p/a[i-1].p-100).toFixed(1)+'%'; }));


// console.log(prices)
        
        
//         // console.log(today, yesterday);
//     } catch (error) {
//         console.log(error);
//     }
// }

// function formatDay(datestring, long = true){
//     const date = new Date(datestring); // Convert date string to date object
//     const options = { weekday: long ? 'long' : 'short'} // choose either long or short name // Saturday or Sat
//     return new Intl.DateTimeFormat('en', options).format(date)
// }