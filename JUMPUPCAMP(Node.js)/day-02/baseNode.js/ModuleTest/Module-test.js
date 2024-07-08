const process = require("process");

process.on('beforeExit',(code) => {
  console.log("beforeExit", code);
})

process.on("exit", (code) => {
  console.log(`exit code=${code}`);
})

for (i = 0; i <= 1000; i++) {
  console.log(i);
}

let env = process.env
console.log(env);