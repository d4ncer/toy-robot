var fs = require('fs');

/**
 * FileReader constructor
 * @constructor
 */
var FileReader = function() {};

/**
 * Read input file
 * @param {String} fileName Input file name
 * @param {Function} cb Callback function
 */
FileReader.prototype.readInputFile = function(fileName, cb) {

  // Validate input
  this.validateInput(fileName, function(err, validatedFileName) {
    if (err) {
      cb(err);
      return false;
    }

    // Read file into memory if valid
    fs.readFile(validatedFileName, { encoding: 'utf-8' }, function(err, fileData) {
      if (err) {
        cb(new ReferenceError('File doesn\'t exist or cannot be accessed'));
        return false;
      }

      // If contents are empty, throw an error
      if (!fileData.length) {
        cb(new RangeError('File content cannot be empty'));
        return false;
      }

      cb(null, fileData);
    });
  });


};

/**
 * Validate input file name
 * @param {String} argString Input string to validate
 * @param {Function} cb Callback function
 */
FileReader.prototype.validateInput = function(argString, cb) {
  var splitArray = argString.split('.');
  var len = splitArray.length;

  // Rudimentary check to see if file has an extension
  if (len === 1 && splitArray[0] === argString) {
    cb(new TypeError('Simulator requires a valid .txt file'));
    return false;
  }

  // Only allow .txt files as input
  if (splitArray[len - 1] !== 'txt') {
    cb(new TypeError('Simulator only accepts .txt files'));
    return false;
  }

  cb(null, argString);

};

module.exports = FileReader;