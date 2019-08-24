const fs = require("fs");
const path = require("path");

const getAllProducts = () => {
  const filePath = path.join(
    __dirname,
    "..",
    "db",
    "products",
    "all-products.json"
  );

  const bufferData = fs.readFileSync(filePath);
  const products = JSON.parse(bufferData);
  return products;
};

module.exports = getAllProducts;
