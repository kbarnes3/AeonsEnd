"use strict";

var marketGenerator = require('./createMarket.js');
var all_expansions = [
    'Base',
    'The Depths',
    'The Nameless',
];
console.log(marketGenerator.createRandomMarket(all_expansions));
