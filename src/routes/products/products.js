const allProducts = require("../../db/products/all-products.json");

const productsRoute = (request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(allProducts));
};

module.exports = productsRoute;
