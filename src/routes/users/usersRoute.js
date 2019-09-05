const User = require("../../db/schemas/user");

const usersRoute = async (request, response) => {
  await User.create(request.body)
    .then(result => {
      const resp = {
        status: "User have been created",
        user: result
      };

      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(resp));
    })
    .catch(err => console.log(err));
};

module.exports = usersRoute;
