const url = require("url");
const handlePathToAllProducts = require("../../helpers/getAllProducts");
const getIds = require("../../helpers/getIds");

const getFewProductsByIds = (req, res) => {
  const parsedURL = url.parse(req.url);
  const arrOfIds = getIds(parsedURL);

  const products = handlePathToAllProducts();

  const arrOfProducts = [];
  for (let i = 0; i < arrOfIds.length; i++) {
    const product = products.find(el => el.id === arrOfIds[i]);

    if (!product) continue;

    const productForResponse = {
      id: product.id,
      sku: product.sku,
      name: product.name,
      description: product.description
    };
    arrOfProducts.push(productForResponse);
  }

  const response = {
    status: arrOfProducts.length === 0 ? "no products" : "success",
    products: arrOfProducts
  };

  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.write(JSON.stringify(response));
  res.end();
};

module.exports = getFewProductsByIds;
