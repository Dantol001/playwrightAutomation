/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


*/


import {test,expect} from '@playwright/test';

test('Built-inLocators', async ({page})=>{

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