// function aa(param1) {
//   param1()
// }

// function bb() {
//   console.log('bb');
// }

// let result = aa(bb)
// console.log(result);

function main() {
  console.log('main');
  job1(job2)
  
}

function job1(callback) {
  console.log('job1');
  callback()
}

function job2() {
  console.log('job2');
}