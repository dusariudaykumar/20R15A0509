const express = require("express");
const app = express();
const axios = require("axios");
const controller = async (req, res) => {
  const urls = req.query.url;
  //   const urlsArray = urls.split(",");
  try {
    const responseArray = [];
    for (let i = 0; i < urls.length; i++) {
      console.log(urls[i]);
      const response = await axios.post(urls[i]);
      responseArray.push(response.data.numbers);
    }
    console.log(responseArray);
  } catch (error) {
    console.log(error);
  }
};
app.all("/", controller);
app.listen(process.env.PORT || 3000);
