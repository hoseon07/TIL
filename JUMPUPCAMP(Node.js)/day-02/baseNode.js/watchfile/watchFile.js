const fs = require("fs");

// 감시할 파일
let filename = "./sample-sql.js";
let sql = require(filename);

fs.watchFile(filename, (curr, prev) => {
  console.log(`curr = ${JSON.stringify(curr)}, prev = ${prev}`); // curr와 prev는 stats를 알려주는 것
  //캐시에 저장되어 있는 파일 삭제
  delete require.cache[require.resolve(filename)];
  sql = require(filename);
  //sample-sql.js 파일에 변경이 일어나면 sample-sql.js 재할당
  console.log(sql.select());
});
