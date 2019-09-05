const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  id: Number,
  sku: Number,
  name: String,
  description: String,
  price: String,
  currenc: String,
  creatorId: Number,
  created: String,
  modified: String,
  categories: Array,
  likes: Number
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
