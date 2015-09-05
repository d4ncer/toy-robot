#!/usr/bin/env node
var clc = require('cli-color');
var app = require('../index.js');

/**
 * Get input file argument
 */
var fileName = process.argv[2];

/**
 * Run the simulation
 */
app.runSimulation(fileName, function(err, robot) {
  // If error, let the user know
  if (err) {
    console.log(clc.white.bgRed('ERROR:') + ' ' + clc.red(err.message));
    return false;
  }

  // If no valid place commands were given, let the user know
  if (!robot.isPlaced) {
    console.log(clc.yellow('Your robot was never placed on the table :('));
  }

  // Finis!
  console.log(clc.white('-------------------------------------'));
  console.log(clc.blue('Success! Your simulation is at an end'));
  console.log(clc.white('-------------------------------------'));
});
