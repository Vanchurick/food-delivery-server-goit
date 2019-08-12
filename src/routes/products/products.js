const path = require("path");
const fs = require("fs");

const productsRoute = (request, response) => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db",
    "products",
    "all-products.json"
  );

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
};

module.exports = productsRoute;
