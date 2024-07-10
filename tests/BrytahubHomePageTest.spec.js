const {test, expect} =require('@playwright/test');

test('Home Page',async ({page})=>{

    await page.goto('https://brytahub.com/');

  
    const pageTitle=await page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('Brytahub - Learn Vocational Skills Online');

    
    const pageURL=page.url();
    console.log('Page URL is:',pageURL);

    await expect(page).toHaveURL('https://brytahub.com/');

    await page.close();


})