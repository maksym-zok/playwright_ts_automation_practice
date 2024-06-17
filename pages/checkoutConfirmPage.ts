import { Page, Locator,} from "@playwright/test";
import {expect, test } from '../base/pomFixture';
import HomePage from "../pages/homePage";
import CommonFunctions from "../utils/commonFunctions";

export default class ConfirmOrderPage {
    readonly itemsTableLocator
    // readonly elementTableLocator
    readonly confrimOrderLocator

    constructor(private page: Page) {
        this.itemsTableLocator = "//table[contains(@class,'table table-bordered')]"
        this.confrimOrderLocator = "//button[contains(text(),'Confirm Order')]"
        // this.elementTableLocator = `${this.itemsTableLocator}/tbody/tr/td[1 and contains(text(),'${productName}')]`
    }

    async verifyElementPresenceInCheckoutConfirm(...productNames: string[]) {
        const commonFunctions = new CommonFunctions(this.page);
        await this.page.waitForLoadState('load');
        for (const productName of productNames) {
            await commonFunctions.verifyElementPresence(`${this.itemsTableLocator}/tbody/tr/td[1 and contains(text(),'${productName}')]`, `${productName}`);
        }
    }
}