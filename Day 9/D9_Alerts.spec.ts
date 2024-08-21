import {expect,test} from "@playwright/test";
test(`Automate Alerts and Frames Interaction`,async ({page}) => {
    
    page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    page.once("dialog",async dialog=>{
        console.log(`Alert is:${dialog.message()}`);
        if(dialog.message()==="Press a button")
        {
            dialog.accept();
            console.log("Alert Accepted");
            
        }

        
    })
   await page.frameLocator("#iframeResult").getByRole("button", {name:'Try'}).click();
   await page.waitForTimeout(5000);

   let text = await page.frameLocator("#iframeResult").locator("//button[text()='Try it']/../p").innerText();

   expect(text).toEqual("You pressed OK!");
    //await page.getByRole("button", {name:'Try'}).click();
})