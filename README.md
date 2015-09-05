# Toy Robot simulator

A toy robot simulator written in Node.js 

## Installation & usage

The simulator can be installed globally or locally. 

**Global**

This will add ```robot``` to your path. Use it wherever you'd like.FiFix Fi
```sh
$ npm install -g
$ robot instructions.txt
```

**Local**

If you install it locally, you can either use it within the directory via ```npm start``` or ```node```.
```sh
$ npm install
$ npm start -- instructions.txt
$ node ./bin/robot.js instructions.txt
```

## Instruction format

The simulator accepts only .txt files, with one command per line. The commands available are

- **PLACE X, Y, DIRECTION (PLACE 0,1,NORTH):** Place the robot on the table.
- **MOVE:** Move the robot one unit in the direction it is facing
- **LEFT:** Turn the robot left
- **RIGHT:** Turn the robot right
- **REPORT:** Report the current position and direction of the robot (0,0,NORTH)

The table is 5x5, and any command that would place the robot off the table *will be ignored*.

## Dependencies

- [cli-color](https://github.com/medikoo/cli-color)

## Tests

```sh
$ npm test
```

Test input files are available in ```test/data```. 


