const path = require("path");
const fs = require("fs");

const getProductById = (request, response, id) => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db",
    "products",
    "all-products.json"
  );

  const bufferData = fs.readFileSync(filePath);

  const products = JSON.parse(bufferData);
  const product = products.find(elem => elem.id === id);
  const resp = {
    status: "success",
    product
  };

  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.write(JSON.stringify(resp));
  response.end();
};

module.exports = getProductById;
