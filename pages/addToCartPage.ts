import { Page, Locator,} from "@playwright/test";
import {expect, test } from '../base/pomFixture';
import HomePage from "../pages/homePage";
import CommonFunctions from "../utils/commonFunctions";

export default class AddToCartPage {
    readonly removeItemFromCartButton
    readonly cartItemsTable
    constructor(private page: Page) {
        this.removeItemFromCartButton = "//button[@title='Remove' or @data-original-title='Remove']"
        this.cartItemsTable = "//div[@class='table-responsive']//a[contains(text(),'"
    }

    async removeAllItemsWithNameFromCart(productName) {
        const commonFunctions = new CommonFunctions(this.page)
        await commonFunctions.performTableClickAction(`//a[contains(text(),'${productName}')]/../../td${this.removeItemFromCartButton}`);
    }
}