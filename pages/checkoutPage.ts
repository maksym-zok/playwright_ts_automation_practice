import { Page, Locator,} from "@playwright/test";
import {expect, test } from '../base/pomFixture';
import HomePage from "../pages/homePage";
import CommonFunctions from "../utils/commonFunctions";

export default class CartCheckoutPage {
    readonly billingAddressTelephoneNumberLocator
    readonly billingAddressFirstNameLocator
    readonly billingAddressLastNameLocator
    readonly billingAddressCompanyNameOptionalLocator
    readonly billingAddressAddress1_Locator
    readonly billingAddressAddress2_OptionalLocator
    readonly billingAddressCityLocator
    readonly billingAddressPostCodeLocator
    readonly billingAddressCountryDropdownLocator
    readonly billingAddressRegionLocator
    readonly deliveryAndBillingAddressCheckboxLocator
    readonly shippingAddressFirstNameLocator
    readonly shippingAddressLastNameLocator
    readonly shippingAddressCompanyNameOptionalLocator
    readonly shippingAddressAddress1_Locator
    readonly shippingAddressAddress2_OptionalLocator
    readonly shippingAddressCityLocator
    readonly shippingAddressPostCodeLocator
    readonly shippingAddressCountryDropdownLocator
    readonly shippingAddressRegionLocator
    readonly checkoutCartTableLocator
    readonly termsConditionCheckbox
    readonly continueLocator
    constructor(private page: Page) {
        this.billingAddressTelephoneNumberLocator = "//input[@placeholder='Telephone']"
        this.billingAddressFirstNameLocator = "(//input[@placeholder='First Name'])[1]"
        this.billingAddressLastNameLocator = "(//input[@placeholder='Last Name'])[1]"
        this.billingAddressCompanyNameOptionalLocator = "(//input[@placeholder='Company'])[1]"
        this.billingAddressAddress1_Locator = "(//input[@placeholder='Address 1'])[1]"
        this.billingAddressAddress2_OptionalLocator = "(//input[@placeholder='Address 2'])[1]"
        this.billingAddressCityLocator = "(//input[@placeholder='City'])[1]"
        this.billingAddressPostCodeLocator = "(//input[@placeholder='Post Code'])[1]"
        this.billingAddressCountryDropdownLocator = "//*[@name='country_id']"
        this.billingAddressRegionLocator = "//*[@name='zone_id']"
        this.deliveryAndBillingAddressCheckboxLocator = "//*[@name='shipping_address_same']"
        this.shippingAddressFirstNameLocator = "(//input[@placeholder='First Name'])[2]"
        this.shippingAddressLastNameLocator = "(//input[@placeholder='Last Name'])[2]"
        this.shippingAddressCompanyNameOptionalLocator = "(//input[@placeholder='Company'])[2]"
        this.shippingAddressAddress1_Locator = "(//input[@placeholder='Address 1'])[2]"
        this.shippingAddressAddress2_OptionalLocator = "(//input[@placeholder='Address 2'])[2]"
        this.shippingAddressCityLocator = "(//input[@placeholder='City'])[2]"
        this.shippingAddressPostCodeLocator = "(//input[@placeholder='Post Code'])[2]"
        this.shippingAddressCountryDropdownLocator = "//*[@name='shipping[country_id]']"
        this.shippingAddressRegionLocator = "//*[@name='shipping[zone_id]']"
        this.checkoutCartTableLocator = "//div[@id='checkout-cart']"
        this.termsConditionCheckbox = page.locator("//label[@for='input-agree']")
        this.continueLocator = "//button[text()='Continue ']"
    }

    // async removeAllItemsWithNameFromWishList(productName) {
    //     const commonFunctions = new CommonFunctions(this.page)
    //     await commonFunctions.performTableClickAction(`//a[contains(text(),'${productName}')]/../../td${this.removeItemFromWishListButton}`);
    // }

    async verifyElementPresenceInCheckout(productName){
        const commonFunctions = new CommonFunctions(this.page)
        await commonFunctions.verifyElementPresence(`${this.checkoutCartTableLocator}//a[contains(text(),'${productName}')]`, `${productName}`)
    }
    async enterBillingAddress(enterphoneNumber: string, enterFirstName: string, enterLastName: string, enterCompany: string,
        enterAddress1: string, enterAddress2: string, enterCity: string, enterPostCode: string, enterCountry: string,
        enterRegionName){
        const commonFunctions = new CommonFunctions(this.page);
        await commonFunctions.enterInputValue(this.billingAddressTelephoneNumberLocator, enterphoneNumber);
        await commonFunctions.enterInputValue(this.billingAddressFirstNameLocator, enterFirstName);
        await commonFunctions.enterInputValue(this.billingAddressLastNameLocator, enterLastName);
        await commonFunctions.enterInputValue(this.billingAddressCompanyNameOptionalLocator, enterCompany);
        await commonFunctions.enterInputValue(this.billingAddressAddress1_Locator, enterAddress1);
        await commonFunctions.enterInputValue(this.billingAddressAddress2_OptionalLocator, enterAddress2);
        await commonFunctions.enterInputValue(this.billingAddressCityLocator, enterCity);
        await commonFunctions.enterInputValue(this.billingAddressPostCodeLocator, enterPostCode);
        await commonFunctions.clickOptionByText(this.page, this.billingAddressCountryDropdownLocator, enterCountry);
        await commonFunctions.clickOptionByText(this.page, this.billingAddressRegionLocator, enterRegionName);
    }
}