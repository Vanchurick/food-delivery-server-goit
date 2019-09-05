const Product = require("../../db/schemas/product");

const changeProductData = async (req, resp) => {
  const product = await Product.findOne({ id: req.params.id });

  const dataToChangeArr = Object.entries(req.body);

  dataToChangeArr.map(data => (product[data[0]] = data[1]));

  await Product.updateOne({ id: req.params.id }, product);

  const response = {
    status: "succes",
    product
  };

  resp.writeHead(201, { "Content-Type": "application/json" });
  resp.write(JSON.stringify(response));
  resp.end();
};

module.exports = changeProductData;
