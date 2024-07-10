const express = require('express')

//app 자체가 서버!
const app = express()
const port = 3000


//create Server와 비슷한 개념
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.get('/students', (req, res) => {
  res.send('Hello, Students!')
})

app.post('/students', (req, res) => {
  res.send('Hello, Students!')
})

app.put('/students', (req,res) => {
  res.send('Hello, Put')
})

app.delete('/', (req, res) => {
  res.send('Hello, Delete')
})

/**
 * app.METHOD(PATH, HANDLER)
 * get- 조회
 * post- insert
 * put- update
 * delete- 삭제
 */

// http.listen하고 같은 내용
app.listen(port, () => {
  console.log(`Server Is Running... ${port}`)
})