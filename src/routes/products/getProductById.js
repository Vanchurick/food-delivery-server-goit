const handlePathToAllProducts = require("../../helpers/getAllProducts");

const getProductById = (request, response) => {
  const products = handlePathToAllProducts();
  const id = Number(request.params.id);

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
