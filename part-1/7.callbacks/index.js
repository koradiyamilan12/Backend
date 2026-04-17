const fs = require("fs");

// callback function

function person(name, callbackfn) {
  console.log(`Hello ${name}`);
  callbackfn();
}

function address() {
  console.log("India");
}

person("Milan", address);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }
  console.log(data);
});
