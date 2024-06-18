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
    
    private async isElementPresent(locator: string, elementName?: string): Promise<boolean> {
        const elementLocator = this.page.locator(locator);
        const count = await elementLocator.count();
        return count > 0;
      }
    
    async checkElementPresence(locator: string, ...elementNames: string[]): Promise<void> {
        await this.page.waitForLoadState('load');
    
        // Якщо не передано жодного елементу, перевіряємо лише locator
        if (elementNames.length === 0) {
          const isElementPresent = await this.isElementPresent(locator);
          console.log(locator);
          if (isElementPresent) {
            console.log(`Element is present`);
          } else {
            throw new Error(`Element is absent`);
          }
        } else {
          // Якщо передано елементи, перевіряємо кожен з них
          for (const elementName of elementNames) {
            const fullLocator = `${locator}${elementName}')]`;
            const isElementPresent = await this.isElementPresent(fullLocator, elementName);
            console.log(fullLocator);
            if (isElementPresent) {
              console.log(`${elementName} is present`);
            } else {
              throw new Error(`${elementName} is absent`);
            }
          }
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

    async clickOptionByText(page: Page, selector: string, optionText: string): Promise<void> {
        await page.selectOption(selector, { label: optionText });
    }
}