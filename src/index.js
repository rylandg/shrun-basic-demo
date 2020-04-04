#!/usr/bin/node

if (process.argv.length < 3) {
  console.error('Please provide a command to testshrun');
  process.exit(1);
}

const helpCommand = () => {
  console.log('You will receive no help with testshrun');
};

const runCommand = () => {
  console.log('Running sucks');
};

const unrecognizedCommand = (cmd) => {
  console.error(`${cmd} is not a recognized testshrun command`);
  process.exit(1);
};

const command = process.argv[2];

switch(command) {
  case 'help':
    helpCommand();
    break;
  case 'run':
    runCommand();
    break;
  default:
    unrecognizedCommand(command);
    break;
}
