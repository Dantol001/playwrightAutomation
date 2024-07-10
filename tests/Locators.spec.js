import {test,expect} from '@playwright/test';

test('Locators', async ({page})=>{

await page.goto("https://www.demoblaze.com/index.html");

//click on log in button - using property as a locator//

//await page.locator('id=login2').click();//
await page.click('id=login2')

//provide username - CSS
await page.fill('#loginusername','pavanol')

//provide password - CSS
await page.fill("input#loginpassword", 'test@123')

//click on login button
await page.click("//button[normalize-space()='Log in']")

//click on Logout button
const logoutlink= await page.locator("//a[@id='logout2']")

await expect(logoutlink).toBeVisible();

await page.close()


})