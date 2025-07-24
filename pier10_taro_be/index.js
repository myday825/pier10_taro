const express = require("express");
const cors = require("cors");
const app = express();

// CORS 설정 (한 번만!)
app.use(
  cors({
    origin: "http://localhost:3000", // 프론트 도메인
    credentials: true, // 필요시 쿠키 포함
  })
);

app.use(express.json()); // JSON 요청 처리

app.get("/", (req, res) => {
  res.send("서버 작동 중!");
});

app.listen(8000, () => {
  console.log("포트 연결 완 >> 8000");
});
