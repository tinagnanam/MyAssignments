import{expect,test} from "@playwright/test";


test(`01_Checkbox : Click on basic checkbox`,async ({page}) => {
    
    page.goto("https://leafground.com/checkbox.xhtml");

    // await page.locator("//*[text()='Basic Checkbox']/..//div[contains(@class,'ui-chkbox-box')]").click();

    // await expect(page.locator("//*[text()='Basic Checkbox']/..//div[contains(@class,'ui-state-active')]")).toBeEnabled()

})

test('Notification Checkbox.',async ({page}) => {
    page.goto("https://leafground.com/checkbox.xhtml");

    //page.locator(".card").filter({hasText:"Basic Checkbox"}).locator('input[type="checkbox"]').click();
    
  
  
    await page.locator("//*[text()='Notification']/..//div[contains(@class,'ui-chkbox-box')]").click();

    await expect(page.locator("//*[text()='Notification']/..//div[contains(@class,'ui-state-active')]")).toBeEnabled();


    
})
test('Click on your favorite language',async ({page}) => {
    page.goto("https://leafground.com/checkbox.xhtml");

    
    let courseName = ['Java','Python','Javascript'];
    for (let index = 0; index < courseName.length; index++) {
        await page.locator(`//table[contains(@class,'ui-selectmanycheckbox')]//td/label[text()='${courseName[index]}']/../div/div[contains(@class,'ui-chkbox-box')]`).click();
        
    }

    //await page.locator(".card").filter({hasText:"Choose your favorite language(s)"}).locator(div)
    
})

    //await expect(page.getByLabel("Python")).toBeEnabled();

    test('Click on the "Tri-State Checkbox',async ({page}) => {
        page.goto("https://leafground.com/checkbox.xhtml");
    
//     await page.locator("//*[text()='Tri State Checkbox']/..//div[contains(@class,'ui-chkbox-box')]").click();
//     await expect(page.locator("//*[text()='Tri State Checkbox']/..//div[contains(@class,'ui-chkbox-box')])/span[contains(@class,'ui-icon-check')]")).toBeVisible();
//     expect(page.locator("//[@class='ui-growl-message']/p").innerText()).toEqual("State=1");
// await page.locator("//*[text()='Tri State Checkbox']/..//div[contains(@class,'ui-chkbox-box')]").click();

//     await expect(page.locator("//*[text()='Tri State Checkbox']/..//div[contains(@class,'ui-chkbox-box')]/span[contains(@class,'ui-icon-closethick')]")).toBeVisible();

//     expect(await page.locator("//*[@class='ui-growl-message']/p").innerText()).toEqual("State = 2")


await page.locator("//*[text()='Tri State Checkbox']/..//div[contains(@class,'ui-chkbox-box')]").click();

await expect(page.locator("//*[text()='Tri State Checkbox']/..//div[contains(@class,'ui-chkbox-box')]/span[contains(@class,'ui-icon-check')]")).toBeVisible();

//Validate the error message
expect(await page.locator("//*[@class='ui-growl-message']/p").innerText()).toEqual("State = 1")

await page.locator("//*[text()='Tri State Checkbox']/..//div[contains(@class,'ui-chkbox-box')]").click();
await expect(page.locator("//*[text()='Tri State Checkbox']/..//div[contains(@class,'ui-chkbox-box')]/span[contains(@class,'ui-icon-closethick')]")).toBeVisible();

//Validate the error message
expect(await page.locator("//*[@class='ui-growl-message']/p").innerText()).toEqual("State = 2")
    
})

//Click on the "Toggle Switch."
test(`Toggle Switch`,async ({page}) => {
    page.goto("https://leafground.com/checkbox.xhtml");

     await page.locator("//*[text()='Toggle Switch']/..//div[@class='ui-toggleswitch-slider']").click();
    await expect (page.locator("//*[text()='Toggle Switch']/..//div[contains(@class,'ui-toggleswitch-checked')]")).toBeVisible();


    
})

test(`Disabled checkbox.`,async ({page}) => {
    
    page.goto("https://leafground.com/checkbox.xhtml");

 
await expect(page.locator("//*[text()='Verify if check box is disabled']/..//input[@aria-checked='false']")).toBeDisabled();
//await expect(page.locator("//*[text()='Verify if check box is disabled']/..//input[@aria-checked='false']")).toBeDisabled();
    
})

test.only(`Multiple Panel`,async ({page}) => {
    
    page.goto("https://leafground.com/checkbox.xhtml");
    await page.locator('.ui-selectcheckboxmenu-trigger').click();
const list= await page.locator('.ui-selectcheckboxmenu-trigger').allTextContents();
for (let index = 0; index <=list.length; index++) {
    if(list[index]==='Paris' || list[index]==='Miami'){
        await page.locator(".ui-selectcheckboxmenu-item .ui-chkbox-box").nth(index).click();
    }     
    
    
    }

    await page.locator(".ui-selectcheckboxmenu-close").click(); 
})