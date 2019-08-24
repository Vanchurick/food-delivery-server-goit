const express = require("express");
const apiRoutes = express.Router();

const productsRoute = require("./products/products");
const getProductByID = require("./products/getProductById");
const getUserByID = require("./users/getUserByID");
const usersRoute = require("./users/usersRoute");
const createOrder = require("./order/createOrder");
const saveUserImage = require("./image/saveUserImage");

apiRoutes
  .get("/products", productsRoute)
  .get("/products/:id", getProductByID)
  .get("/users/:id", getUserByID)

  .post("/users", usersRoute)
  .post("/order", createOrder)
  .post("/image", saveUserImage())

  .get("/", productsRoute)
  .get("*", (req, res, next) => {
    res.status(404).send("Route not exists");
  });

module.exports = apiRoutes;
