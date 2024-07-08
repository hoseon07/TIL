const {myFileRead, myName} = require('./readfile')

myFileRead(function (result) {
  console.log(result);
})

console.log(myName);