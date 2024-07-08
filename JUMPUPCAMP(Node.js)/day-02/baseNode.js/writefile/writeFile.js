const fs = require('fs')

let data = '배드민턴 실력은 수장쌤께 배우면서 키우자!!'
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('정상적으로 파일에 글을 업로드 했습니다!');
});