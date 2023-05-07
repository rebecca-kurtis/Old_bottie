const express = require('express');
const cors = require('cors');
const { generatePrompt } = require('./src/chat_gpt/generate');
const { prompt } = require('./src/chat_gpt/prompt');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/chatGPT', (req, res) => {
  res.json({ message: "Hello from Server" });
});

app.post('/chatGPT', (req, res) => {
  const relationship = req.body.relationship;
  const proseStyle = req.body.proseStyle;
  const occasion = req.body.occasion;
  const theme = req.body.themes;
  const mood = req.body.mood;

  message = generatePrompt(prompt(relationship, proseStyle, occasion, theme, mood));
  console.log(message);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});