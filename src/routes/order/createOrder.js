const Order = require("../../db/schemas/order");

const createOrder = async (req, res) => {
  await Order.create(req.body)
    .then(result => {
      const resp = {
        status: "Order have been created",
        order: result
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(resp));
    })
    .catch(err => console.log(err));
};

module.exports = createOrder;
