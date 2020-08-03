const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const mail = require('../handlers/mail');

getData = async (req ,res) => {
    try {
        const start = new Date();
        start.setHours(0,0,0,0);
        const end = new Date();
        end.setHours(23,59,59,999);
        
        const items = await Item.find({created: {$gte: start, $lte: end}});
        return items;
    } catch(error) {
        console.log(error);
    }
}

exports.getReport = async (req, res) => {
    try {
        const items = await getData();
        res.json({items});
    } catch (error) {
        console.log(error);
        res.json({error});
    }
}

sendReport = async (req, res) => {
    
    let status = 'failed';
    try {
        const items = await getData();

        await mail.send({
            userEmail: 'andremacnamara12@gmail.com',
            subject: 'Daily Price Update',
            filename: 'report',
            items,
            test: 'item'
        });
        status = 'sent';
    } catch(error) {
        console.log(error);
    }

    console.log('Send Report')
}

module.exports = { sendReport }
