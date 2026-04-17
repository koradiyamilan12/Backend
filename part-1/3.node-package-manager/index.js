const lodash = require("lodash");

const names = ["milan", "bhavin", "ankit", "meet", "darshil"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
