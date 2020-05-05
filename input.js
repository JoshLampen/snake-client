const stdin = process.stdin;

let inputs = {
  w: 'Move: up',
  d: 'Move: right',
  s: 'Move: down',
  a: 'Move: left',
  k: 'Say: nice move',
  l: 'Say: good effort!'
};

let connection;

const handleUserInput = stdin.on('data', key => {
  if (key === '\u0003') { // if it's ctrl + c, exit the program
    process.exit();
  }
  if (inputs[key]) {
    connection.write(inputs[key]);
  }
});

const setupInput = conn => {
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput;
  return stdin;
};

module.exports = { setupInput };