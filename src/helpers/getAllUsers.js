const path = require("path");
const fs = require("fs");

const getAllUsers = () => {
    const allUsersPath = path.join(
        __dirname,
        "..",
        "db",
        "users",
        "all-users.json"
      );
    
      const usersBufferData = fs.readFileSync(allUsersPath);
      const allUsers = JSON.parse(usersBufferData);
      return allUsers;
}

module.exports = getAllUsers;