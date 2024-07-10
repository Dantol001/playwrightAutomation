const {test, expect} =require('@playwright/test');

test('Home Page',async ({page})=>{

    await page.goto('https://www.aqskill.com/');

  
    const pageTitle=await page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('AQskill- Acquire a skill today and level up your career.');

    
    const pageURL=page.url();
    console.log('Page URL is:',pageURL);

    await expect(page).toHaveURL('https://www.aqskill.com/');

    await page.close();


})