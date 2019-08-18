const { handlePathToAllProducts } = require("./helpers");

const getProducts = (request, response) => {
  const products = JSON.stringify(handlePathToAllProducts());

  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.write(products);
  response.end();
};

module.exports = getProducts;
