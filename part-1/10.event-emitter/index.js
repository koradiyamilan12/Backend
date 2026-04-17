const EventEmitter = require("events");

const myFirstEmmiter = new EventEmitter();

// register a listener
myFirstEmmiter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

myFirstEmmiter.emit("greet", "Milan");
