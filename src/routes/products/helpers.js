const fs = require("fs");
const path = require("path");
const services = {};

services.getId = url => {
  const lastIndex = url.lastIndexOf("/");

  if (lastIndex !== -1) {
    return Number(url.slice(lastIndex + 1));
  }
};

services.getIds = parsedURL => {
  const allPartsOfURL = parsedURL.path.split("/");
  const category = allPartsOfURL[allPartsOfURL.length - 1].split("=");
  const arrOfIdsInString = category[1].split(",");
  const arrOfIdsInNumber = arrOfIdsInString.map(el => Number(el));
  return arrOfIdsInNumber;
};

services.getCategory = parsedURL => {
  const allPartsOfURL = parsedURL.path.split("/");
  const arrWitCategory = allPartsOfURL[allPartsOfURL.length - 1].split("=");
  const category = arrWitCategory[arrWitCategory.length - 1];
  return category;
};

services.handlePathToAllProducts = () => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db",
    "products",
    "all-products.json"
  );

  const bufferData = fs.readFileSync(filePath);
  const products = JSON.parse(bufferData);
  return products;
};

module.exports = services;
