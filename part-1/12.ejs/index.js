const express = require("express");
const path = require("path");

const app = express();

// set the view engine as ejs
app.set("view engine", "ejs");

// set the directory for the views
app.set("views", path.join(__dirname, "views"));

const products = [
  {
    id: 1,
    title: "Products 1",
  },
  {
    id: 2,
    title: "Products 2",
  },
  {
    id: 3,
    title: "Products 3",
  },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home", products: products });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About page" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
