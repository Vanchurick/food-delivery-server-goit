const Order = require("../../db/schemas/order");

const getOrder = async (req, resp) => {
  const order = await Order.findOne({ _id: req.params.id });

  const response = {
    status: "succes",
    order
  };

  resp.writeHead(200, { "Content-Type": "application/json" });
  resp.write(JSON.stringify(response));
  resp.end();
};

module.exports = getOrder;
