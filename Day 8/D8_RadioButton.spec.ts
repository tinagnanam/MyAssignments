import {test,expect} from "@playwright/test";
test(`Radio button`,async ({page}) => {
    page.goto("https://leafground.com/radio.xhtml");
    let defaultRadiobtn=await page.locator("//*[text()='Find the default select radio button']/..//td//div[contains(@class,'ui-state-active')]/../../label").innerText();
console.log(defaultRadiobtn);

    
})
test.only(`_Radio :most favorite browser and assert that the browser is enabled. `,async ({page}) => {
    
    page.goto("https://leafground.com/radio.xhtml");

    let radio = await page.locator("//*[text()='Your most favorite browser']/..//td//span").first().click();

    let defaultValue = await page.locator("//*[text()='Your most favorite browser']/..//td//div[contains(@class,'ui-state-active')]/../../label").innerText();
    
    console.log(`Default selected radio button is: ${defaultValue}`);

    expect(defaultValue).toEqual("Chrome");
    
})