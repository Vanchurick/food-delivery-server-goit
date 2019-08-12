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

  let bufferData = fs.readFileSync(filePath);

  response.writeHead(200, {
    "Content-Type": "application/json"
  });

  response.write(bufferData);
  response.end();
};

module.exports = productsRoute;
