// const { handlePathToAllProducts } = require("../products/helpers");
const handlePathToAllProducts = require("../../helpers/getAllProducts");
const getAllUsers = require("../../helpers/getAllUsers");
const path = require("path");
const fs = require("fs");

const createOrder = (req, resp) => {
  let body = "";
  let order = null;

  req.on("data", function(data) {
    body = body + data;
    const orderInfo = JSON.parse(body);
    order = orderInfo;

    const allProducts = handlePathToAllProducts();

    const arrOfProductsByOrder = [];

    for (let i = 0; i < orderInfo.products.length; i++) {
      const product = allProducts.find(
        el => el.id === Number(orderInfo.products[i])
      );

      if (!product) continue;
      arrOfProductsByOrder.push(product);
    }

    const allUsers = getAllUsers();

    const userName = allUsers.map(el => {
      if (el.id === orderInfo.user) return el.username;
    });

    const userOrderDirectoryPath = path.join(
      __dirname,
      "../..",
      "db",
      "users",
      "orders",
      `${userName[0]}`
    );

    const userOrderPath = path.join(
      userOrderDirectoryPath,
      `${userName[0]}-order.json`
    );

    if (userOrderPath) {
      fs.writeFile(
        userOrderPath,
        JSON.stringify([...arrOfProductsByOrder]),
        function(err) {
          if (err) throw err;
          console.log("New user has added!");
        }
      );
    } else {
      fs.appendFile(
        userOrderPath,
        JSON.stringify([...arrOfProductsByOrder]),
        function(err) {
          if (err) throw err;
        }
      );
    }
  });

  req.on("end", function() {
    const response = {
      status: "success",
      order: order
    };

    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.end(JSON.stringify(response));
  });
};

module.exports = createOrder;
