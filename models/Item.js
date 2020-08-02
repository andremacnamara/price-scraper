const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const itemSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        trim: true,
        required: true,
    },
    standardPrice: {
        type: Number,
        required: true,
    },
    salePrice: {
        type: Number,
    },
    image: {
        type: String,
    },
})

module.exports = mongoose.model('Item', itemSchema);