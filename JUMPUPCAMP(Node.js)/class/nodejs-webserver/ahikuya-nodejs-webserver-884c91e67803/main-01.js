// module을 가져옴
const http = require('http')
const fs = require('fs')
const url = require('url')

const app = http.createServer(function (req, res) {
  let reqUrl = req.url
  let parsedUrl = url.parse(reqUrl)
  let pathname = parsedUrl.pathname
  let queryData = parsedUrl.query
  console.log(`pathname=${pathname}, queryData=${queryData}`)

  if (pathname == '/') { // root이면

    // 디렉터리에 있는 내용을 읽어온다.
    fs.readdir('./data', (err, files) => {
      // 배열로 가져온 데이터들을 목록화 시켜서 문자열에 담는다. -> 담긴 문자열을 화면에 출력
      let list = ''
      for(i=0; i<files.length; i++){
        list += `index=${i}, name=${files[i]}`
        list += '\n'
      }

       // 한글 깨짐 방지 위해 charset=utf-8 적용
      res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
      res.end(list)
    })
  }
})

app.listen(8080, () => {
  console.log("Server is Running....")
})

