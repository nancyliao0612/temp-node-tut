// CommonJs - every file is module (by default)
// Modules - Encapsulated Code (only share minium)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative");
require("./7-mind-grenade");

sayHi("chloe");
sayHi(names.peter);
sayHi(names.john);
