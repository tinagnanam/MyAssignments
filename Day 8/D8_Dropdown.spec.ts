import {test,expect} from "@playwright/test";
import { log } from "console";
test('DropDown:select your fav tools',async ({page}) => {
    page.goto("https://leafground.com/select.xhtml");
    await page.selectOption(".ui-selectonemenu",{label:'Playwright'});

})
test('DropDown:Count and print the values',async ({page}) => {
    page.goto("https://leafground.com/select.xhtml");
    await page.selectOption(".ui-selectonemenu",{label:'Playwright'});
   let list=page.locator(".ui-selectonemenu>option");
   let count=await list.count();
   console.log(`Count is : ${count}`);
   
   for (let index = 0; index < count; index++) {
    let allList=await list.nth(index).innerText();
    console.log(`The list contains:${allList}`);
   }
    
   })
   test('Choose your preferred country',async ({page}) => {
    page.goto("https://leafground.com/select.xhtml");
    let chooseCountry= await page.locator("[role='combobox']").first().click();
    let listCountry=page.locator(".ui-selectonemenu-item");
    let listCount=await listCountry.count();
    //console.log(listCount);
    for (let index = 0; index < listCount; index++) {
        let values =await listCountry.nth(index).innerText();
        console.log(`${values}`);
        if(values==="Germany")
        {
            await listCountry.nth(index).click();
        }
        
    }
expect(await page.locator("label.ui-selectonemenu-label").first().innerText()).toEqual("Germany");
       

})

test('Choose any three courses from the dropdown',async ({page}) => {
    page.goto("https://leafground.com/select.xhtml");
    let courseNames=['js','Java','python'];
    for (let index = 0; index < courseNames.length; index++) {
        let fillCourse=page.locator(".ui-autocomplete-multiple-container>li input");
        await fillCourse.fill(courseNames[index]);
        await page.keyboard.press('Enter');
    }

   
    
})

test.only('Choose a Language ',async ({page}) => {
    page.goto("https://leafground.com/select.xhtml");
 let LangSel= await page.locator(".card").filter({hasText:'Choose language randomly'}).getByRole("combobox").click();
//await page.selectOption(".ui-selectonemenu").
  let listLang=await page.locator(".ui-selectonemenu-item");
  let countLang=await listLang.count();
  for (let index = 0; index <countLang; index++) {
    let allLangList=await listLang.nth(index).innerText();
    console.log(`The list contains:${allLangList}`);
    if (allLangList==='Hindi') {
        await listLang.nth(index).click();
        console.log(`Count is : ${countLang}`);
        
    }
    //expect(await page.locator(".ui-selectonemenu-item").first().innerText()).toEqual("Select Language");
    //expect(await page.locator("label.ui-selectonemenu-label").first().innerText()).toEqual("Hindi");
   // expect(await page.locator(".ui-selectonemenu-item").innerText()).toEqual("Hindi");
       
    //expect(await listLang.nth(index).innerText()).toEqual("Hindi");
  }
  //console.log(`The count is:${countLang}`);
  //
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//   }
    
   
    
})