const {test, expect} = require('@playwright/test');
test('First playwright test',async({browser,page})=>
{
    await page.goto("https://www.google.com/");
    console.log(await page.title());
//await expect(page).toHaveTitle("Google");
});
