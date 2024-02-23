import {test, expect} from "@playwright/test"
import {Dropdown} from "../pages/dropdown";

// async function someFunction(page: Page, countryName: countryValue) {
//     const dropdown = new Dropdown(page);
//     await dropdown.selectCountry(countryName);
//   }

test("handling dropdown", async ({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("//*[@id='select-demo']", {
        // label: "Tuesday"
        // value: "Tuesday"
        index: 3
    });
    await page.selectOption("//*[@id='multi-select']", [{
        value: "Florida"
    }, {
        value: "Ohio"
    }])
    await page.waitForTimeout(3000)
})

test("bootstrap dropdown", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await Dropdown.selectCountry(page, 'Denmark');
})