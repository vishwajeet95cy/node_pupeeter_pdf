import express from "express";
import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
import {
  authenticityContect,
  contactLabelSheet,
  htmlContent,
  newContent,
  priceList,
  reportArtwork,
  tearSheet,
  textContext,
} from "./utils/htmlContent.js";
const app = express();
const PORT = process.env.PORT || 5200;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("src/upload"));

app.get("/", async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://www.npmjs.com/package/puppeteer/");
    await page.pdf({ path: "src/upload/test.pdf", format: "A4" });
    browser.close();
    res.sendFile(path.resolve(__dirname + "/upload/test.pdf"));
  } catch (err) {
    res.json(err);
  }
});

app.get("/generatepdf", async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: "shell" });

    const page = await browser.newPage();
    console.log("http://localhost:5200/banner.jpg");
    await page.setContent(contactLabelSheet(32));
    const fileName = `new${Date.now()}`;
    await page.pdf({
      path: `src/upload/${fileName}.pdf`,
      format: "A4",
      height: 1100,
    });

    await browser.close();
    res.sendFile(path.resolve(__dirname + `/upload/${fileName}.pdf`));
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
