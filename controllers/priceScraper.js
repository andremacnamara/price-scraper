//const mongoose = require('mongoose');

exports.createStore = async (req ,res) => {
    req.body.author = req.user._id;
    //console.log(req.body); //same as dd(request()->all()) in laravel
    const store = await (new Store(req.body)).save();
    req.flash('success', `Successfully created ${store.name}. Care to leave a review?`);
    res.redirect(`/store/${store.slug}`);   
}