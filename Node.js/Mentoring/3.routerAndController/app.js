//Packages
const express = require("express"); // express를 불러와서 express 변수에 할당
const dotenv = require("dotenv"); // 환경 변수 설정
const cors = require("cors"); // cors 설정
const path = require("path"); // path 설정

//Router
const router = require("./router/index.js"); // index.js 파일을 라우터에 연결

//Setting
dotenv.config({
  path: path.join(__dirname, ".env")
});
const app = express();
const port = process.env.PORT || 8080

app.use(cors({
  origin: "*",
  method: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  credential: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", router); // /이하로 연결되는 모드 엔드포인트를 라우터로 이관시킴

app.listen(port, () => { // 포트 연결
  console.log(`Server has initted on port ${port}!`);
})