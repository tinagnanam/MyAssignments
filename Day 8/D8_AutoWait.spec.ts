import { test,expect } from "@playwright/test";

test(`Auto-waits`,async ({page}) => {

    await page.goto("https://leafground.com/waits.xhtml");
    //wait for visibility
    const cardSelector= page.locator(".card").filter({hasText:"Wait for Visibility"});  
    const buttonToClick=cardSelector.getByRole("button").filter({hasText:"Click"});
    await buttonToClick.click();

// //Locator Chaining
// // await page.locator(".card").filter({hasText:"Wait for Visibility"})
// // .getByRole("button").filter({hasText:"Click"}).click();

await expect(page.locator(".card").filter({hasText:"Wait for Visibility"})
.getByRole("button").filter({hasText:"I am here"})).toBeVisible({timeout:10000});
})



//wait for invisibility

test(`Wait for invisibility`,async ({page}) => {

    await page.goto("https://leafground.com/waits.xhtml");
await page.locator(".card").filter({hasText:"Wait for Invisibility (1 - 10 Sec)"}).getByRole("button").filter({hasText:"Click"}).click();

 await expect(page.locator(".card").filter({hasText:"Wait for Invisibility (1 - 10 Sec)"}).getByRole("button").filter({hasText:"I am about to hide"})).toBeDisabled({timeout:10000});
})



//wait for change

test(`Wait for text change`,async ({page}) => {

    await page.goto("https://leafground.com/waits.xhtml");
    await page.locator(".card").filter({hasText:"Wait for Text Change (1 - 10 Sec)"}).getByRole("button").filter({hasText:"Click"}).click();

//await page.waitForTimeout(10000);

//Assertion
await expect(page.locator(".card").filter({hasText:"Wait for Text Change (1 - 10 Sec)"}).getByRole("button").filter({hasText:"Did you notice?"})).toBeEnabled({timeout:10000});


})
//clickability
test.only(`Wait for clickability`,async ({page}) => {

    await page.goto("https://leafground.com/waits.xhtml");
 
    let card3 =  page.locator(".card").filter({hasText:'Wait for Clickability'});
    await card3.getByRole("button",{name:'Click First Button'}).click();

    let button = await expect(card3.locator(".ui-growl-item").last()).toBeHidden({timeout:8000})
//await page.waitForTimeout(10000);

//Assertion
//await expect(page.locator(".card").filter({hasText:"Wait for Text Change (1 - 10 Sec)"}).getByRole("button").filter({hasText:"Did you notice?"})).toBeEnabled({timeout:10000});
})