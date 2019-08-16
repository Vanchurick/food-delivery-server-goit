const { handlePathToAllProducts } = require("./helpers");

const getProductById = (request, response, id) => {
  const products = handlePathToAllProducts();

  const product = products.find(elem => elem.id === id);

  const resp = {
    status: !product ? "no product" : "success",
    product
  };

  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.write(JSON.stringify(resp));
  response.end();
};

module.exports = getProductById;
