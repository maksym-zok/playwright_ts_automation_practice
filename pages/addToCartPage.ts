import { Page, Locator,} from "@playwright/test";
import {expect, test } from '../base/pomFixture';
import HomePage from "../pages/homePage";
import CommonFunctions from "../utils/commonFunctions";

export default class AddToCartPage {
    readonly removeItemFromCartButton
    readonly cartItemsTable
    readonly htcTouchHDProductlocator
    constructor(private page: Page) {
        this.removeItemFromCartButton = "//button[@title='Remove' or @data-original-title='Remove']"
        this.cartItemsTable = "//div[@class='table-responsive']"
        this.htcTouchHDProductlocator = `${this.cartItemsTable}//a[contains(text(),'HTC Touch HD')]`
    }

    async removeAllItemsWithNameFromCart(productName) {
        const commonFunctions = new CommonFunctions(this.page)
        await commonFunctions.performTableClickAction(`//a[contains(text(),'${productName}')]/../../td${this.removeItemFromCartButton}`);
    }

    async verifyElementPresenceInCart(productName){
        const commonFunctions = new CommonFunctions(this.page)
        await commonFunctions.verifyElementPresence(`${this.cartItemsTable}//a[contains(text(),'${productName}')]`, `${productName}`)
    }
}