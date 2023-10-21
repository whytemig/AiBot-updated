const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const routerChat = express.Router();
const OpenAI = require("openai");
require("dotenv").config();

// CHAT SERVER

routerChat.post("/chat", async (req, res) => {
  const openai = new OpenAI({
    apiKey: process.env.OpenAI_API_KEY,
  });

  try {
    const chatResponse = await openai.chat.completions.create({
      messages: [{ role: "user", content: req.body.message }],
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    res.send(chatResponse.choices[0].message.content).status(200);
  } catch (error) {
    console.error(error).status(500);
  }
});

module.exports = routerChat;
