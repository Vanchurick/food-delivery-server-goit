const getAllUsers = require("../../helpers/getAllUsers");

const getUserByID = (req, resp) => {
  const allUsers = getAllUsers();

  const id = req.params.id;
  const user = allUsers.find(el => el.id === id);

  const response = {
    status: !user ? "not found" : "success",
    user: !user ? {} : user
  };

  resp.writeHead(200, { "Content-Type": "application/json" });
  resp.write(JSON.stringify(response));
  resp.end();
};

module.exports = getUserByID;
