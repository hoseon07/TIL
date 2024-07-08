const fs = require("fs");

const myName = "hoseon"

function myFileRead(callback) {
  fs.readFile("test_file.txt", "utf-8", (err, data) => {
    // 에러가 발생하면 실행됨
    if (err) {
      console.error(err); // 에러를 출력함
      return; // 함수를 종료함
    }

    // 에러가 아니면 실행됨
    callback(data)
  });
}

module.exports = {
  myFileRead,
  myName
}