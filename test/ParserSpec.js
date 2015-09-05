var expect = require('chai').expect;
var Parser = require('../lib/Parser');

describe('Parser', function() {
  var parser;

  before(function() {
    parser = new Parser();
  });

  it('should throw an error if no instructions are passed', function(done) {
    parser.parseArgs('', function(err) {
      expect(err).to.exist;
      done();
    });
  });

  it('should correctly parse file contents into an array of instructions', function(done) {
    parser.parseArgs('PLACE 0,0,NORTH\nMOVE\nLEFT\nRIGHT\nREPORT', function(err, instructionList) {
      expect(instructionList).to.deep.equal([
        {
          command: 'place',
          args: [0, 0, 'north']
        }, {
          command: 'move'
        }, {
          command: 'turn',
          args: 'left'
        }, {
          command: 'turn',
          args: 'right'
        }, {
          command: 'report'
        }
      ]);
      done();
    });
  });

  it('should not parse any unknown instructions', function(done) {
    parser.parseArgs('PLACE 0,0,NORTH\nslartybartfast\nmarco polo\nPLACE 0,1,north-west\nMOVE\nREPORT', function(err, instructionList) {
      expect(instructionList).to.deep.equal([
        {
          command: 'place',
          args: [0, 0, 'north']
        }, {
          command: 'move'
        }, {
          command: 'report'
        }
      ]);
      done();
    });
  });
});