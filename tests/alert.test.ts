import {test, expect} from "@playwright/test"

test("handling alerts #1", async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async (alert) =>{
        const alertMessageText = alert.message();
        console.log(alertMessageText);
        await alert.accept();
    });
    await page.locator("(//button[text()='Click Me'])[1]").click();
})

test("handling alerts #2", async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async (alert) =>{
        const alertMessageText = alert.message();
        console.log(alertMessageText);
        await alert.dismiss();
    });
    await page.locator("(//button[text()='Click Me'])[2]").click();
    await expect(page.locator("//p[@id='confirm-demo']")).toContainText("Cancel!");
})

test("handling alerts #3", async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async (alert) =>{
        const alertMessageText = alert.message();
        console.log(alertMessageText);
        await alert.accept("My name");
    });
    await page.locator("(//button[text()='Click Me'])[3]").click();
    await expect(page.locator("//p[@id='prompt-demo']")).toContainText("My name");
})

test("handling modals #1", async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.locator("//button[@data-target='#myModal']").click();
    await page.locator("(//button[text()='Save Changes'])[1]").click();
})