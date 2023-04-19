const fs = require("fs");
const path = require("path");

const express = require("express");
// const bodyparser = require("body-parser"); // not installed
// const helmet = require("helmet"); //not installed
const cors = require("cors");

const app = express();

// function read(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(
//       file,
//       {
//         encoding: "utf-8"
//       },
//       (error, data) => {
//         if (error) return reject(error);
//         resolve(data);
//       }
//     );
//   });
// }

module.exports = function application(
  ENV
) {
  app.use(cors());
  // app.use(helmet());
  // app.use(bodyparser.json());

  if (ENV === "development" || ENV === "test") {
    console.log('API is running.');
  }

  app.close = function() {
    return;
  };

  return app;
};