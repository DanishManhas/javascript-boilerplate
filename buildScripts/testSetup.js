// This file isn't transpiled. Sp use CommonJS.

// Register babel to transpile before running tests
require("babel-register")();

//Disable webpack features that Mocha doesn't understand
require.extensions[".css"] = function() {};
