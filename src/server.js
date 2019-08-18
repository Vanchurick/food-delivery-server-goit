const https = require("https");
const url = require("url");
const fs = require("fs");
const path = require("path");

const morgan = require("morgan");
const router = require("./routes/router");

const logger = morgan("combined");

const secureKeyPath = path.join(__dirname, "..", "server.key");
const secureCertPath = path.join(__dirname, "..", "server.crt");

const options = {
  key: fs.readFileSync(secureKeyPath),
  cert: fs.readFileSync(secureCertPath)
};

const startServer = port => {
  const server = https.createServer(options, (request, response) => {
    // Get route from the request
    const parsedUrl = url.parse(request.url);

    // Get router function
    const func = router[parsedUrl.pathname] || router.default;

    logger(request, response, () => func(request, response));
  });

  server.listen(port);
};

module.exports = startServer;
