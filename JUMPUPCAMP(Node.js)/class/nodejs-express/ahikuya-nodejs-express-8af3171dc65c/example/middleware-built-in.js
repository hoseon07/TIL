const express = require('express')

let app = express();

let options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}

// url 접근 시 public을 작성하지 않아도 됨
app.use(express.static('public', options));

app.listen(3000, () => {
  console.log('Server is running...')
})