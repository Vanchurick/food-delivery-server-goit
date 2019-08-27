const fs = require("fs");
const shortid = require("shortid");
const path = require("path");
const getAllUsers = require("../../helpers/getAllUsers");
const checkUserExist = require("../../helpers/checkUserExist");
const createUserOrderDirectiory = require("../../helpers/createOrderDirectoryOfUser");

const usersRoute = (request, response) => {
  let body = "";
  let newCreatedUser = null;
  let isUserExist = false;

  request.on("data", function(data) {
    body = body + data;
    const user = JSON.parse(body);
    user.id = shortid.generate();
    newCreatedUser = user;

    const allUsers = getAllUsers();

    if (!checkUserExist(allUsers, user.username)) {
      isUserExist = false;
      allUsers.push(user);

      const allUsersPath = path.join(
        __dirname,
        "../..",
        "db",
        "users",
        "all-users.json"
      );

      fs.writeFile(allUsersPath, JSON.stringify(allUsers), function(err) {
        if (err) throw err;
        console.log("New user has added!");
      });

      createUserOrderDirectiory(user.username);
      
    } else {
      isUserExist = true;
      console.log(
        "User with such name is exist already! Create new and try again, please!"
      );
    }
  });

  request.on("end", function() {
    const resp = {
      status: isUserExist ? "User is exist already" : "success",
      user: isUserExist ? {} : newCreatedUser
    };

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(resp));
  });
};

module.exports = usersRoute;
