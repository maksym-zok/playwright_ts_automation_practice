import { Page, Locator,} from "@playwright/test";
import {expect, test } from '../base/pomFixture';
import HomePage from "../pages/homePage";
import CommonFunctions from "../utils/commonFunctions";

export default class ConfirmOrderPage {
    readonly itemsTableLocator
    readonly confrimOrderLocator

    constructor(private page: Page) {
        this.itemsTableLocator = `//table[contains(@class,'table table-bordered')]/tbody/tr/td[1 and contains(text(),'`
        this.confrimOrderLocator = "//button[contains(text(),'Confirm Order')]"
    }
}