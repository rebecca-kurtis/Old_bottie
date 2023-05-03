import axios from "axios";
import dotenv from 'dotenv'
import prompt from "./prompt.js";

dotenv.config()

const cardPrompt = prompt("Sandra", "Mike", "Wife", "Ode", "25th Wedding Anniversary", "Love, Marriage", "Hopeful");

axios({
  method: 'post',
  url: "https://api.openai.com/v1/chat/completions \ ",
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
  },
  data: {
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", "content": cardPrompt }],
    temperature: 1,
  }
}).then(function (response) {
  console.log(response.data.choices[0].message.content);
});


