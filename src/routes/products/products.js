const url = require("url");
const getProducts = require("./getAllproducts");
const getProductById = require("./getProductById");
const getId = require("./services");

const productsRoute = (request, response) => {
  const reqMethod = request.method;
  const parsedUrl = url.parse(request.url);
  const id = getId(parsedUrl.path);

  if (!isNaN(id) && reqMethod === "GET") {
    getProductById(request, response, id);
    return;
  }

  if (reqMethod === "GET") {
    getProducts(request, response);
    return;
  }
};

module.exports = productsRoute;
