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
  const { message } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o", // 또는 gpt-3.5-turbo
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    res.json({ response: response.data.choices[0].message.content });
  } catch (error) {
    console.error("🛑 Error:", error.response?.data || error.message);
    res.status(500).json({
      error: "OpenAI API request failed",
      details: error.response?.data || error.message,
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
