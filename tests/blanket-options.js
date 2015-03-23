/* globals blanket */

blanket.options({
   modulePrefix: "dummy",
   filter: "//.*dummy/.*/",
   antifilter: "//.*(tests|template).*/",
   loaderExclusions: [],
   enableCoverage: true
});