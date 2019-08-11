const productsRoute = require("./products/products");
const signUpRoute = require("./signup/signup");

const router = {
  "/products": productsRoute,
  "/signup": signUpRoute,
  default: productsRoute
};

module.exports = router;
