const express = require("express"),
  http = require("http");
const morgan = require("morgan");
const hostname = "localhost";
const port = 3000;

const app = express();
const server = http.createServer(app);

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promotionRouter = require('./routes/promoRouter');

app.use(morgan("dev"));

app.use("/dishes",dishRouter);
app.use("/promotions",promotionRouter);
app.use("/leaders", leaderRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
