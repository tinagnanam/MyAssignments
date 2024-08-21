import {expect, test} from "@playwright/test";
test('Click button and verify Title Change',async ({page}) => {

    await page.goto("https://leafground.com/button.xhtml");
   
//     //1.Write a script to click the button and confirm a title change or any visible response
    await page.locator(".card").filter({hasText:"Click and Confirm title"}).getByRole("button",{name:'Click'}).click();
  

await page.waitForLoadState('load',{timeout:5000});
let titleOfPage = await page.title();
   expect(titleOfPage).toEqual("Dashboard");
    
})

//     //2.Assert the disabled state of a button
test('Assert the disabled state of a button',async ({page}) => {

await page.goto("https://leafground.com/button.xhtml");

let buttonDisabled=page.locator(".card").filter({hasText:"Confirm if the button is disabled."});
await expect(buttonDisabled.getByRole("button",{name:'Disabled'})).toBeDisabled();
})
    // 3.Click the Image button and click on any hidden button
    test('Click the Image button and click on any hidden button',async ({page}) => {
    await page.goto("https://leafground.com/button.xhtml");
    // let imgButton= page.locator(".card").filter({hasText:'Click Image Button and Click on any hidden button'}).getByRole("button",{name:'Image'});
    // imgButton.click();

    let imgBtn =  page.locator(".card").filter({hasText:'Click Image Button and Click on any hidden button'})
    .getByRole("button",{name:'Image'});

imgBtn.click();

let secondarybtn = page.locator("//span[text()='Secondary']");

await expect(secondarybtn).toBeVisible({timeout:5000})

await secondarybtn.click();

})

// 4.Check how many rounded buttons are present
test('Check how many rounded buttons are present',async ({page}) => {
    await page.goto("https://leafground.com/button.xhtml");
   

    let roundBtn =  page.locator(".card").filter({hasText:'How many rounded buttons are there?'})
    .getByRole("button");

let roundBtncount=await roundBtn.count();
console.log(`Count of RoundButton:${roundBtncount}`);

    
// for (let index = 0; index <= roundBtncount ; index++) {
//     console.log(`${roundBtn}`);
// }
})