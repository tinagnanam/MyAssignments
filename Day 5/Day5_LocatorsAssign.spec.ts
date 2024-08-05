import { test } from "@playwright/test";
test('To Create a Test Lead',async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");

   await page.locator(".decorativeSubmit").click();
   await page.locator("text=CRM/SFA").click();

   //click Lead
   await page.getByRole("link",{name:'Leads'}).click();

   //click create lead
   //await page.getByRole("link",{name:'Create Lead'}).click(); //playwright inbuilt locator
   await page.locator("//a[text()='Create Lead']").click(); //css selector
  // await page.locator("//a[text()='Create Lead']").click();

   //fill the company name
   //await page.fill("#createLeadForm_companyName", "RBS")  example
   await page.locator("#createLeadForm_companyName").fill("TestLeaf");
   console.log(`The company name is: ${await page.locator("#createLeadForm_companyName").inputValue()}`);

   //Fill the firstname
await page.locator("#createLeadForm_firstName").fill("Ida");

  
console.log(await page.locator("#createLeadForm_firstName").inputValue());

   //fill the lastname
   await page.locator("#createLeadForm_lastName").fill("Gnanam");

   console.log(await page.locator("#createLeadForm_lastName").inputValue());

//    Fill the Salutation
await page.locator("#createLeadForm_personalTitle").fill("Miss.");
// Fill the Title
await page.locator("#createLeadForm_generalProfTitle").fill("TestLead");

// Fill the Annual Revenue
await page.locator("#createLeadForm_annualRevenue").fill("1200000")

// Fill the Department
await page.locator("#createLeadForm_departmentName").fill("Automation");

// //Fill the Phone number
await page.locator("#createLeadForm_primaryPhoneNumber").fill("9874563126")

// Click Create Lead button
await page.click("[name='submitButton']");

// Verify the company name, first name, last name and the status 
//Assertions


// Get the page title
//console.log(await page.title());
console.log(`Page URL : ${page.url()}`);

})
