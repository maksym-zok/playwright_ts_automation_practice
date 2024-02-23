import {expect, type Locator, type Page, test} from '@playwright/test';

// export class Dropdown{
//     page: Page;
//     constructor(page: Page) {
//         this.page = page;
//     }

//     // Locators
//     countryDropdownButton = () => this.page.locator("//*[@id='country']/../span");
//     countryDropdownList = () => this.page.locator("//*[@id='select2-country-results']");
//     // Actions
//     public async selectCountry(countryName) {
//         await this.countryDropdownButton().click();
//         await this.countryDropdownList().locator("li", {
//             hasText: countryName
//         }).click();   
//     }
// }
// import { Page } from '@playwright/test';

export class Dropdown {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    static async selectCountry(page: Page, countryName: string) {
    const countryDropdownButton = () => page.locator("//*[@id='country']/../span");
    const countryDropdownList = () => page.locator("//*[@id='select2-country-results']");

    await countryDropdownButton().click();
    await countryDropdownList().locator("li", {
      hasText: countryName
    }).click();
  }
}