const fs = require("fs");

const signUpRoute = (request, response) => {
  if (request.method === "POST") {
    let body = "";

    request.on("data", function(data) {
      body = body + data;

      let user = JSON.parse(body);
      let userName = user.username;

      fs.appendFile(`src/db/users/${userName}.json`, body, function(err) {
        if (err) throw err;
      });
    });

    request.on("end", function() {
      const post = JSON.parse(body);
      const resp = {
        status: "success",
        user: post
      };
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(resp));
    });
  }
};

module.exports = signUpRoute;
