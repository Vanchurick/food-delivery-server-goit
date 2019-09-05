const Product = require("../../db/schemas/product");

const addProduct = async (req, resp) => {
  await Product.create(req.body)
    .then(result => {
      const response = {
        status: "Product have been added",
        user: result
      };

      resp.writeHead(200, { "Content-Type": "application/json" });
      resp.end(JSON.stringify(response));
    })
    .catch(err => console.log(err));
};

module.exports = addProduct;
