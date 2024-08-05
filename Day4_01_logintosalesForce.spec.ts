import {chromium,test} from "@playwright/test";
test.only(`To Login to SalesForce`,async () => {
  const browser = await chromium.launch();
  const browserContext= await browser.newContext();
  const browserPage=await browserContext.newPage();
  await browserPage.goto("https://login.salesforce.com/");
  const url=browserPage.url();
  console.log(`The url of the page is: ${url}`);
  const title= await browserPage.title();
  console.log(`The title of the page is:${title}`);
  await browserPage.locator("#username").fill("tina@testleaf.com");
  await browserPage.locator("#password").fill("elshaddai88");

  await browserPage.locator("input[type='submit']").click();
  await browserPage.waitForTimeout(10000);
})