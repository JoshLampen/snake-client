const stdin = process.stdin;

const handleUserInput = stdin.on('data', key => {
  if (key === '\u0003') { // if it's ctrl + c, exit the program
    process.exit();
  }
});

const setupInput = () => {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput;
  return stdin;
};

module.exports = { setupInput };