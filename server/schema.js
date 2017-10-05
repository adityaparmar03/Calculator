var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var orderSchema = new Schema({
    orderid: Number,
    items: [{
        id: Number,
        name: String,
        qty: Number,
        size: String
    }]
});

// the schema is useless so far
// we need to create a model using it
var Order = mongoose.model('Order', orderSchema);

// make this available to our users in our Node applications
module.exports = Order;