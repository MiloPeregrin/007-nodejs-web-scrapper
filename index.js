const PORT = 8000; //volitelny port, kteremu budeme naslouchat

const axios = require("axios").default;
const cheerio = require("cheerio");
const express = require("express");

const app = express();
const scrapedPageUrl = "https://www.theguardian.com/uk";

axios(scrapedPageUrl) //returns a promise
  .then((response) => {
    const html = response.data;
    const loadedHtml = cheerio.load(html);
    const articles = [];

    loadedHtml(".fc-item__title", html).each(function () {
      const title = loadedHtml(this).text();
      const url = loadedHtml(this).find("a").attr("href");
      articles.push({
        title,
        url,
      });
    });
    console.log(articles);
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
