import { test } from "@playwright/test";
test('To Create a Test Lead',async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");

   await page.locator(".decorativeSubmit").click();
   await page.locator("text=CRM/SFA").click();

   //click Lead
   await page.getByRole("link",{name:'Leads'}).click();

   
//    Click Find Leads
await page.getByRole('link',{name:'Find Leads'}).click();

  

   //Enter the firstname
   await page.locator("[name='firstName']").last().fill('Ida');



//click Find Leads button
//await page.locator("//button[text()='Find Leads')]").click();
await page.getByRole('button',{name:'Find Leads'}).click();


// Click the first resulting Lead ID
await page.locator("//a[text()='13717']").click();


// 11. Click Edit
await page.locator("//a[text()='Edit']").click();

// 12. Edit Company name

await page.locator("#updateLeadForm_companyName").fill("Testleaf ltd");


// 13. Edit Annual Revenue

await page.locator("#updateLeadForm_annualRevenue").fill("1500000");
// 14. Edit Department
await page.locator("#updateLeadForm_departmentName").fill("QA");

// 15. Enter Description
await page.locator("#updateLeadForm_description").fill("The details have been updated");
// 16. Click Update
//await page.getByRole('button',{name:'submitButton'}).click();
//await page.locator("//input[value()='Update']").click();
await page.click("[value='Update']");

await page.waitForTimeout(5000);


//Gracefully clearing the resources
//Close the page
await page.close();
console.log(`Page URL : ${page.url()}`);

// 17. Verify the edited fields and print the title of the page

})