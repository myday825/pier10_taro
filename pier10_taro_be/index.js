require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const fetch = require("node-fetch");
const OpenAI = require("openai");
const app = express();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  fetch, // 필수
});

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { selectedStar } = req.body;

  const prompt = `${selectedStar}의 오늘의 운세를 부산 사투리하는 데이식스 성진의 말투로, 한 줄씩 총 5줄로 알려줘. 각 줄은 JSON 배열로 출력해줘. 예: ["운세1", "운세2", "운세3", "운세4", "운세5"]`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o", // 또는 gpt-3.5-turbo
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    // json 파싱
    const content = response.data.choices[0].message.content.trim();
    const starArr = JSON.parse(content);

    res.json({ selectedStar, star: starArr });
    console.log(
      "💬 GPT 응답 원본:",
      selectedStar,
      "👂🏻👂🏻👂🏻👂🏻",
      response.data.choices[0].message.content
    );
  } catch (error) {
    console.error("⚠️ JSON Parse Error:", parseErr.message);
    res.status(500).json({
      error: "GPT 응답이 JSON 형식이 아닙니다.",
      rawResponse: response.data.choices[0].message.content,
    });
  }
});

app.get("/", (req, res) => {
  res.send("타로 서버 접속 완료");
  try {
    console.log("session info : ", req.session);
  } catch (err) {
    console.log(err);
  }
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
