import { Page, Locator, expect } from "@playwright/test";
import HomePage from "./homePage";

export default class SearchBar {
    readonly searchButton: string;
    readonly searchCriteriaInput: string;
    readonly dynamicLocator: string;

    constructor(public page: Page, dynamicText: string) {
        this.searchButton = "//button[text()='Search']";
        this.searchCriteriaInput = "(//input[@name='search'])[3]";
        this.dynamicLocator = `//div[@id="entry_212469"]//a[contains(text(), "${dynamicText}")]`;
    }
    async verifyValue(elementLocator: string, expectedValue: string): Promise<void> {
        const element = await this.page.locator(elementLocator);
        const actualValue = await element.getAttribute("value");
        expect(actualValue).toBe(expectedValue)
        if (actualValue === expectedValue) {
            console.log(`Value is as expected: ${expectedValue}`);
        } else {
            console.error(`Value is not as expected. Expected: ${expectedValue}, Actual: ${actualValue}`);
        }
    }
    async verifyElementCount(expectedCount: number): Promise<void> {
        const elements = await this.page.locator(this.dynamicLocator).count();

        if (elements === expectedCount) {
            console.log(`The number of elements with locator '${this.dynamicLocator}' is as expected: ${expectedCount}`);
        } else {
            console.error(`Unexpected number of elements. Expected: ${expectedCount}, Actual: ${elements}`);
        }
    }

    async enterTextToSearchBar(text: string): Promise<void> {
        const homePage = new HomePage(this.page);
        const searchBar = this.page.locator(homePage.searchBarLocator);
        await searchBar.type(text);
    }
    async clickSearchButton(){
        await this.page.click(this.searchButton);
    }
    async verifySearchResult(expectedValue: string, numberOfItems: number): Promise<void> {
        await this.verifyValue(this.searchCriteriaInput, expectedValue);
        await this.verifyElementCount(numberOfItems);
    }
}
