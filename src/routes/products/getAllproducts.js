const getAllProducts = require("../../helpers/getAllProducts");

const getProducts = (request, response) => {
  const products = JSON.stringify(getAllProducts());

  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.write(products);
  response.end();
};

module.exports = getProducts;
