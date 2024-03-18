const myModule = require("./informations");
const cowsay = require("cowsay");

console.log(myModule);
console.log(
  cowsay.say({
    text: `Hi, my name is ${myModule.name} and i come from ${myModule.campus}`,
    e: "-O",
    t: "U ",
  }),
);
