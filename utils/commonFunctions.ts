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
}