import { Page, Locator,} from "@playwright/test";
import {expect, test } from '../base/pomFixture';
import HomePage from "../pages/homePage";
import CommonFunctions from "../utils/commonFunctions";

export default class WishListPage {
    readonly removeItemFromWishListButton
    readonly addItemToCardButton
    readonly wishListItemsTable
    constructor(private page: Page) {
        this.removeItemFromWishListButton = "//a[@title='Remove' or @data-original-title='Remove']"
        this.addItemToCardButton = "//button[@title='Add to Cart' or @data-original-title='Add to Cart']"
        this.wishListItemsTable = "//div[@class='table-responsive']//a[contains(text(),'"
    }

    async removeAllItemsWithNameFromWishList(productName) {
        const commonFunctions = new CommonFunctions(this.page)
        await commonFunctions.performTableClickAction(`//a[contains(text(),'${productName}')]/../../td${this.removeItemFromWishListButton}`);
    }
}