const url = require("url");
const { getCategory, handlePathToAllProducts } = require("./helpers");

const getProductsByCategory = (req, res) => {
  const parsedURL = url.parse(req.url);
  const category = getCategory(parsedURL);

  const products = handlePathToAllProducts();

  const filteredProducts = products.filter(el =>
    el.categories.includes(category)
  );

  const response = {
    status: filteredProducts.length > 0 ? "succes" : "no products",
    products: filteredProducts.length > 0 ? filteredProducts : []
  };

  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.write(JSON.stringify(response));
  res.end();
};

module.exports = getProductsByCategory;
