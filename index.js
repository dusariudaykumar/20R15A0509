const express = require("express");
const app = express();
const axios = require("axios");
const controller = async (req, res) => {
  const urls = req.query.url;
  try {
    const responseArray = [];
    for (let i = 0; i < urls.length; i++) {
      console.log(urls[i]);
      const response = await axios.post(urls[i]);
      responseArray.push(response.data.numbers);
    }
    const result = [...new Set(responseArray.flat())].sort((a, b) => a - b);
    console.log(result);
    res.json({ result });
  } catch (error) {
    console.log(error);
  }
};
app.get("/numbers", controller);
app.listen(process.env.PORT || 3000);
