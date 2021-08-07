const assert = require("assert");
const puppeteer = require("puppeteer");
// this is for testing a webpage elements.
async function runTest() {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // we can extract values from the web page 
  const title = await page.$eval('h1', (el) => el.innerText);
  console.log('title value: ', title);
  assert.equal(title, 'Example Domain');
  browser.close();
}

runTest();