/* globals blanket, module */

var options = {
   modulePrefix: "dummy",
   filter: "//.*dummy/.*/",
   antifilter: "//.*(tests|template).*/",
   loaderExclusions: [],
   enableCoverage: true,
   cliOptions: {
     jsonOptions: {
       outputFile: 'test-output.json'
     },
     lcovOptions: {
       outputFile: 'lcov.dat'
     },
     reporters: ['json']
   }
};

if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
