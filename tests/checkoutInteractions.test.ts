import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json";
import * as Var from "../test-data/variables.ts"

test("Checkout item when user is logged in", async({page, myAccountPage, homePage, specialHotPage, cartCheckoutPage, confirmOrderPage, commonFunctions}) => {
    // Open a Login page
    await page.goto(Var.loginURL);
    // Login
    await myAccountPage.login(data.validData.email, data.validData.password);
    // Verify that user is logged in
    await myAccountPage.verifyUserState('LoggedIn');
    // Navigate to Special Hot Menu Page
    await commonFunctions.navigateTo(homePage.specialHotMenuButtonLocator)
    // Click on Desktop category
    await commonFunctions.navigateTo(specialHotPage.desktopCategoryLocator);
    // Add a Product HTC Touch HD and iPod Shuffle to Cart
    await specialHotPage.addAProductWithNameTo(specialHotPage.productAddToCartButton, "HTC Touch HD", "iPod Shuffle");
    // Wishlist popUp appeared
    await specialHotPage.isPopUpVisiable(specialHotPage.addToCartPopUpLocator);
    // Open a Cart Checkout Page
    await page.goto(Var.cartCheckoutURL);
    // Verify that items have beed added to the cart
    await commonFunctions.checkElementPresence(cartCheckoutPage.checkoutCartTableLocator, "HTC Touch HD", "iPod Shuffle")
    // Enter Billing Address
    await cartCheckoutPage.enterBillingAddress(data.validData.phoneNumber,
        data.validData.firstName,
        data.validData.secondName, 
        data.validData.company,
        data.validData.address1,
        data.validData.address2,
        data.validData.city,
        data.validData.postcode,
        data.validData.country,
        data.validData.region);
    // Agree to terms
    await cartCheckoutPage.termsConditionCheckbox.check()
    // Click Checkout button
    await page.click(cartCheckoutPage.continueLocator)
    // Redirected to Checkout Confirm page
    await expect(page).toHaveURL(Var.checkoutConfirmURL)
    // Verify that items have beed added to the cart on Confirm Order Page
    await commonFunctions.checkElementPresence(confirmOrderPage.itemsTableLocator, "HTC Touch HD", "iPod Shuffle")
    // Click Confirm Order button
    await page.click(confirmOrderPage.confrimOrderLocator)
    // Redirected to Order Success page
    await expect(page).toHaveURL(Var.checkoutSuccessURL)
})