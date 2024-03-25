import { Page, Locator,} from "@playwright/test";
import { expect, test, } from '../base/pomFixture';
import HomePage from "../pages/homePage";

export default class CommonFunctions {

    constructor(public page: Page){

    }
    
    async  performTableClickAction(Locator: string) {
        let removeLinks = await this.page.locator(Locator).count();
        while (removeLinks > 0) {
            await Promise.all([
                this.page.locator(Locator).nth(0).click(),
                this.page.waitForNavigation({ waitUntil: 'networkidle' }),
                this.page.waitForLoadState('domcontentloaded')
            ]);
            removeLinks = await this.page.locator(Locator).count();
        }
    }
    
    async isElementPresent(locator: string, elementName: string): Promise<boolean> {
        const elementLocator = await this.page.locator(locator);
        const count = await elementLocator.count();
        const isPresent = count > 0;
        return isPresent;
    }

    async verifyElementPresence(locator: string, elementName: string): Promise<void> {
        const isElementPresent = await this.isElementPresent(locator, elementName);
        if (isElementPresent) {
            console.log(`${elementName} is present`);
        } else {
            throw new Error(`${elementName} is absent`);
        }
    }

    async clickOn(buttonLocator: string){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(buttonLocator)
        ])
    }

    async navigateTo(buttonLocator: Locator): Promise<void> {
        await buttonLocator.waitFor({ state: 'attached' });
        await buttonLocator.click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    async stringToLocator(selector: string): Promise<Locator> {
        const variable = this.page.locator(selector);
        console.log(variable);
        return variable;
    }

    async locatorToString(locator: Locator): Promise<string> {
        const variable = locator.toString();
        const strippedString = variable.replace("locator('xpath=", "").slice(0, -2).replace(/\\/g, '');    
        return strippedString;
    }

    async enterInputValue(selector: string, value: string) {
        await this.page.fill(selector, value);
    }
}