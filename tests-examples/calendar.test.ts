import {test, expect} from "@playwright/test"

test("Calendar demo using fill function", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let dateVariable = "1992-09-02";
    await page.fill("id=birthday", dateVariable);
})

test("Calendar demo using moment", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    await page.click("//input[@placeholder='Start date']");
})