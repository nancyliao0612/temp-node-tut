// unlike os, path, fs or http, which are build-in modules
// for the external one, we need to install the dependency (i.e lodash)
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
