const User = require("../../db/schemas/user");

const changeUserData = async (req, resp) => {
  const user = await User.findOne({ _id: req.params.id });

  const dataToChangeArr = Object.entries(req.body);

  dataToChangeArr.map(data => (user[data[0]] = data[1]));

  await User.updateOne({ _id: req.params.id }, user);

  const response = {
    status: "succes",
    user
  };

  resp.writeHead(201, { "Content-Type": "application/json" });
  resp.write(JSON.stringify(response));
  resp.end();
};

module.exports = changeUserData;
