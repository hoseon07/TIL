const http = require("http"); // http 모듈 불러오기

/**
 * http 모듈의 createSerrear하는 함수를 할당
 */

const server = http.createServer((req, res) => { // req = request, res = response
  if(req.method === "POST") {
    res.end(req.body)
  }
  res.writeHead(200); // 200번 상태코드를 응답
  res.end("hello"); // "hello"라는 문자열 반열
})

// 서버 포트를 3000번으로 변환시키고 싶을 경우 server.listen(3000, () => ...)

server.listen(8080, () => { // 매개변수가 없는 화살표 함수
  console.log("Server is listening on 8080"); // 서버가 포트에 연결될 경우 해당 메시지 출력
})

// 실행 : node main.js
// 접속 : localhost:8080