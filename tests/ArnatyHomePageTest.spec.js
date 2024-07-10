const {test, expect} =require('@playwright/test');

test('Home Page',async ({page})=>{

    await page.goto('https://arnaty.onrender.com');

  
    const pageTitle=await page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('Provides expert medical care | ARNATY');

    
    const pageURL=page.url();
    console.log('Page URL is:',pageURL);

    await expect(page).toHaveURL('https://arnaty.onrender.com');

    await page.close();


})