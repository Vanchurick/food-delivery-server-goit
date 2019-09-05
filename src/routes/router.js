const express = require("express");
const apiRoutes = express.Router();

const productsRoute = require("./products/products");
const getProductByID = require("./products/getProductById");
const getUserByID = require("./users/getUserByID");
const usersRoute = require("./users/usersRoute");
const createOrder = require("./order/createOrder");
const saveUserImage = require("./image/saveUserImage");
const changeUserData = require("./users/changeUserData");
const getOrder = require("./order/getOrder");
const addProduct = require("./products/addProduct");
const changeProductData = require("./products/changeProductData");

apiRoutes
  .get("/products", productsRoute)
  .get("/products/:id", getProductByID)
  .get("/users/:id", getUserByID)
  .get("/orders/:id", getOrder)

  .post("/users", usersRoute)
  .post("/orders", createOrder)
  .post("/image", saveUserImage())
  .post("/admin/product", addProduct)

  .put("/user/:id", changeUserData)
  .put("/products/:id", changeProductData)

  .get("/", productsRoute)
  .get("*", (req, res, next) => {
    res.status(404).send("Route not exists");
  });

module.exports = apiRoutes;
