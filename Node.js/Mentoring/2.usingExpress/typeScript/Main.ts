import express from "express" // const express = require("express") -> 예전 방법
import cors from "cors"
import {configDotenv} from "dotenv"

configDotenv(); // 환경변수 설정을 해주는 함수 -> PORT를 가져올 때 String으로 가져옴

const app = express();
const port: Number = Number(process.env.PORT) || 8000;

app.use(cors({ // cors(Cross Origin Resource Sharing = 교차 출처 리소스 허용)
  origin: "*", //주소 설정
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // 허용하는 메소드는 이것보다 훨씬 많음
  credentials: true, // 인증할 때 사용하는 것 (Origin을 전체 허용을 하면 사용할 필요 없음 -> 동작을 하지 않기 때문에)
}))
app.use(express.json()) // 어떤 형식으로 데이터를 처리할 것인가를 물어보는 것 => json
app.use(express.urlencoded({extended: false})) // localhost:8080/home/rate=down 이와 같이 url 해석하는 경우 외부 모듈 or 내부 모듈 을 판단하는 것

app.use("/", (req, res) => { // '/' -> localhost:8080/
  res.status(200).json({ // 응답 객체의 status 값에 200을 추가, json 값에 객체를 추가
    "server" : "OK!"
  })
})

app.listen(port, () => { // 
  console.log(`Server has initted on port ${port}!`);
})