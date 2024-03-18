import {test, expect} from '@playwright/test';

test ("Interact with inputs", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log('Before entering data:' + await messageInput.inputValue());
    
    await messageInput.fill("hi, my name is Jack");
    console.log('After entering data:' + await messageInput.inputValue());
})

test("Sum test", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const firstValueInput = page.locator("#sum1");
    const secondValueInput = page.locator("#sum2");
    const getResultButton = page.locator("//button[text()='Get Sum']");
    const sumResult = page.locator("#addmessage");
    const num1 = 111;
    const num2 = 222;
    const sum = num1 + num2;

    await firstValueInput.fill("" +num1);
    await secondValueInput.fill("" +num2);
    await getResultButton.click();

    await expect(sumResult).toHaveText("" + sum);
})

test("Checkbox", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckbox = page.locator("id=isAgeSelected");
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    await page.waitForTimeout(3000);
    await (expect(singleCheckbox).toBeChecked());
})
