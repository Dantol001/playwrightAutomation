const {test, expect} =require('@playwright/test');

test('Home Page',async ({page})=>{

    await page.goto('https://jerur.onrender.com');

  
    const pageTitle=await page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('Affordable cloud-based church management system | JERUR');

    
    const pageURL=page.url();
    console.log('Page URL is:',pageURL);

    await expect(page).toHaveURL('https://jerur.onrender.com');

    await page.close();


})