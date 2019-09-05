const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  creator: String,
  productsList: Array,
  deliveryType: String,
  deliveryAdress: String,
  sumToPay: Number,
  status: String
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
