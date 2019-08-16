const url = require("url");
const getProducts = require("./getAllproducts");
const getProductById = require("./getProductById");
const getFewProductsByIds = require("./getFewProdcutsByIds");
const getProductsByCategory = require("./getProductsByCategory");

const { getId } = require("./helpers");

const productsRoute = (request, response) => {
  const reqMethod = request.method;
  const parsedUrl = url.parse(request.url);

  const id = getId(parsedUrl.path);
  //get porducts by ID
  if (!isNaN(id) && reqMethod === "GET") {
    getProductById(request, response, id);
    return;
  }
  // get products by few ids
  if (parsedUrl.path.includes("ids") && reqMethod === "GET") {
    getFewProductsByIds(request, response);
    return;
  }
  // get products by category
  if (parsedUrl.path.includes("category") && reqMethod === "GET") {
    getProductsByCategory(request, response);
    return;
  }
  //get all products
  if (reqMethod === "GET") {
    getProducts(request, response);
    return;
  }
};

module.exports = productsRoute;
