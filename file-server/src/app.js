const express = require("express");
// = import express from express;

const bodyParser = require("body-parser");
const cors = require("cors");

// 앱 안에 익스프레스 드러감!!
const app = express();

const PORT = 5000;

// 서버 사이트 셋팅..?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/test", (req, res) => {
  console.log("Server Is Called By Client");
  console.log(req.body.params.inputData);

  const {
    body: {
      params: { inputData },
    },
  } = req;
});

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START!`);
});
