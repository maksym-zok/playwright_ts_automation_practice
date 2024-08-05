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
    readonly existingAddressLocator
    readonly newAddressLocator
    readonly guestAccountButtonLocator
    readonly registeredAccountButtonLocator
    readonly loginToAccountButtonLocator
    readonly personalDetailsEmailLocator

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
        this.personalDetailsEmailLocator = "//input[@name='email']"
        this.checkoutCartTableLocator = "//div[@id='checkout-cart']//a[contains(text(),'"
        this.termsConditionCheckbox = page.locator("//label[@for='input-agree']")
        this.continueLocator = "//button[text()='Continue ']"
        this.existingAddressLocator = "//input[@id='input-payment-address-existing']";
        this.newAddressLocator = "//label[@for='input-payment-address-new']";
        this.guestAccountButtonLocator = "//label[@for='input-account-guest']";
        this.registeredAccountButtonLocator = "//label[@for='input-account-register']";
        this.loginToAccountButtonLocator = "//label[@for='input-account-login']"
    }

    async enterBillingAddress(
        enterPhoneNumber?: string,
        enterFirstName?: string,
        enterLastName?: string,
        enterCompany?: string,
        enterAddress1?: string,
        enterAddress2?: string,
        enterCity?: string,
        enterPostCode?: string,
        enterCountry?: string,
        enterRegionName?: string,
        enterEmail?: string
      ) {
        const commonFunctions = new CommonFunctions(this.page);
        const isExistingAddressPresent = await this.page.locator(this.existingAddressLocator).count() > 0;
        const isNewAddressPresent = await this.page.locator(this.newAddressLocator).count() > 0;

        if (isExistingAddressPresent && isNewAddressPresent) {
          if (!enterPhoneNumber || !enterFirstName || !enterLastName || !enterCompany || !enterAddress1 || !enterAddress2 || !enterCity || !enterPostCode || !enterCountry || !enterRegionName) {
            // If any required data is missing, do nothing
            return;
          }
          // Click on the new address input if it exists
          await this.page.locator(this.newAddressLocator).click();
        }
        // Proceed with filling the billing address
        if (enterPhoneNumber) await commonFunctions.enterInputValue(this.billingAddressTelephoneNumberLocator, enterPhoneNumber);
        if (enterFirstName) await commonFunctions.enterInputValue(this.billingAddressFirstNameLocator, enterFirstName);
        if (enterLastName) await commonFunctions.enterInputValue(this.billingAddressLastNameLocator, enterLastName);
        if (enterCompany) await commonFunctions.enterInputValue(this.billingAddressCompanyNameOptionalLocator, enterCompany);
        if (enterAddress1) await commonFunctions.enterInputValue(this.billingAddressAddress1_Locator, enterAddress1);
        if (enterAddress2) await commonFunctions.enterInputValue(this.billingAddressAddress2_OptionalLocator, enterAddress2);
        if (enterCity) await commonFunctions.enterInputValue(this.billingAddressCityLocator, enterCity);
        if (enterEmail) await commonFunctions.enterInputValue(this.personalDetailsEmailLocator, enterEmail);
        if (enterPostCode) await commonFunctions.enterInputValue(this.billingAddressPostCodeLocator, enterPostCode);
        if (enterCountry) await commonFunctions.clickOptionByText(this.page, this.billingAddressCountryDropdownLocator, enterCountry);
        if (enterRegionName) await commonFunctions.clickOptionByText(this.page, this.billingAddressRegionLocator, enterRegionName);
      }
}