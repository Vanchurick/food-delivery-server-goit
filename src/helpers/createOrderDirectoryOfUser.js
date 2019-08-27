const path = require("path");
const fs = require("fs");

const createUserOrderDirectiory = name => {
  const userDerictoryPath = path.join(
    __dirname,
    "..",
    "db",
    "users",
    "orders",
    `${name}`
  );

  fs.mkdir(userDerictoryPath, function(err) {
    if (err) {
      return console.error(err);
    }
  });
};

module.exports = createUserOrderDirectiory;
