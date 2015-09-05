var expect = require('chai').expect;
var FileReader = require('../lib/FileReader');
var path = require('path');

describe('FileReader', function() {
  var fileReader = new FileReader();

  it('should throw an error if the file is not a text file', function(done) {
    fileReader.readInputFile(path.join(__dirname, 'data/nonTextFile.xml'), function(err) {
      expect(err).to.exist;
      done();
    });
  });

  it('should correctly read in the contents of a text file', function(done) {
    fileReader.readInputFile(path.join(__dirname, 'data/test1.txt'), function(err, fileData) {
      expect(err).to.be.null;
      expect(fileData).to.equal('PLACE 0,0,NORTH\nMOVE\nREPORT');
      done();
    });
  });

  it('should throw an error if file is empty', function(done) {
    fileReader.readInputFile(path.join(__dirname, 'data/testEmpty.txt'), function(err) {
      expect(err).to.exist;
      done();
    });
  });
});