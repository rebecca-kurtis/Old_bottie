const axios = require('axios').default
const dotenv = require('dotenv')
const { prompt } = require("./prompt");

dotenv.config()


const cardPrompt = prompt("Wife", "Ode", "25th Wedding Anniversary", "Love, Marriage", "Hopeful");

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
    max_tokens: 256
  }
}).then(function (response) {
  const message = response.data.choices[0].message.content
  console.log(response.data.choices[0].message.content);
  return message;
});


