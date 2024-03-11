const mongoose = require("mongoose");

// Create an Order Schema
const Schema = mongoose.Schema;

const orderSchema = Schema({
    name: {type: String},
    phone: {type: String},
    qKimchi:{type: Number},
    qChicken:{type: Number},
    qBGimbab:{type: Number},
    subTotal:{type: Number},
    tax:{type: Number},
    total:{type: Number},
});

// Create an Order Model - Collection name is "orders"
const Order = mongoose.model("orders",orderSchema);

// Export the model
module.exports = {
    Order
};
