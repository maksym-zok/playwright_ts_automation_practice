import { Page, Locator,} from "@playwright/test";
import {expect, test } from '../base/pomFixture';
import HomePage from "../pages/homePage";
import {performWishlistClickAction} from "../utils/commonFunctions";

export default class WishListPage {
    readonly removeItemFromWishListButton
    readonly addItemToCardButton
    readonly wishListItemsTable
    constructor(private page: Page, productName: string) {
        this.removeItemFromWishListButton = "//a[@title='Remove' or @data-original-title='Remove']"
        this.addItemToCardButton = "//button[@title='Add to Cart' or @data-original-title='Add to Cart']"
        this.wishListItemsTable = `//div[@class="table-responsive"]`
    }

    async removeAllItemsWithNameFromWishList(productName) {
        await performWishlistClickAction(this.page, `//a[contains(text(),'${productName}')]/../../td${this.removeItemFromWishListButton}`);
    }

    async addAllItemsWithNameToCart(productName) {
        await performWishlistClickAction(this.page, `//a[contains(text(),'${productName}')]/../../td${this.addItemToCardButton}`);
    }
    // async verifyElementPresence(){
    //     (`${this.wishListItemsTable}//a[contains(text(),'${productName}')]`, `${productName}`)
    // }
}