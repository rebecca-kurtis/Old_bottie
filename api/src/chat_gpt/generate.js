const axios = require('axios').default
const dotenv = require('dotenv')

dotenv.config()

const generatePrompt = function (prompt) {
  axios({
    method: 'post',
    url: "https://api.openai.com/v1/chat/completions",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    data: {
      "model": "gpt-3.5-turbo",
      "messages": [{ "role": "user", "content": prompt }],
      temperature: 1,
      max_tokens: 256
    }
  }).then(function (response) {
    const message = response.data.choices[0].message.content
    console.log(response.data.choices[0].message.content);
    return message;
  });
}
module.exports = { generatePrompt };
