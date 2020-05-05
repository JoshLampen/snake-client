const stdin = process.stdin;

let connection;

const handleUserInput = stdin.on('data', key => {
  if (key === '\u0003') { // if it's ctrl + c, exit the program
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'a') {
    connection.write('Move: left');
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