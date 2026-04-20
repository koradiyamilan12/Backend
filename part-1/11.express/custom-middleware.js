const express = require("express");
const app = express();

const requestTimestampLogger = (req, res, next) => {
  const timeStamp = new Date().toDateString();

  console.log(`${timeStamp} from ${req.method} to ${req.url}`);

  next()
};

app.use(requestTimestampLogger);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
