const express = require('express')
var cookieParser = require('cookie-parser')


const app = express()   // express 객체 생성
// middleware로 사용
app.use(cookieParser())   // cookieParser 사용 설정


app.get('/', (req, res) => {  
  // 쿠키 읽기
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)
  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)

  // 쿠키 쓰기
  res.cookie('user_name', 'ahikuya2', { maxAge: 900000, httpOnly: true })
  res.cookie('user_id', 'myId', { maxAge: 900000, httpOnly: true })

  res.send(JSON.stringify(req.cookies))
})

app.listen(8080, () => {
  console.log('Appendix Server is Running....')
});