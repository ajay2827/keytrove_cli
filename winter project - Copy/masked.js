var readline = require("readline"),
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

rl.input.on("keypress", function (c, k) {
  // get the number of characters entered so far:
  var len = rl.line.length;
  // move cursor back to the beginning of the input:
  readline.moveCursor(rl.output, -len, 0);
  // clear everything to the right of the cursor:
  readline.clearLine(rl.output, 1);
  // replace the original input with asterisks:
  for (var i = 0; i < len; i++) {
    rl.output.write("*");
  }
});

rl.question("Enter your password: ", function (pw) {
  // pw == the user's input:
  console.log(pw);
  rl.close();
});