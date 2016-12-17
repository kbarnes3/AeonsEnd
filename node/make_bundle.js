"use strict";

const browserify = require('browserify');
const fs = require('fs');

var output = fs.createWriteStream('../docs/js/market.js');

var b = browserify();
b.require('./createMarket.js', {expose: 'market'});
b.bundle().pipe(output);
