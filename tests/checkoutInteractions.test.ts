import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json";
import * as Var from "../test-data/variables.ts"

test("Checkout item when user is logged in", async({page, myAccountPage, homePage, specialHotPage, cartCheckoutPage, commonFunctions}) => {
    // Open a Login page
    await page.goto(Var.loginURL);
    // Login
    await myAccountPage.login(data.validData.email, data.validData.password);
    // Verify that user is logged in
    await myAccountPage.verifyUserState(myAccountPage.logOutButtonLocator, 'loggedIn');
    // Navigate to Special Hot Menu Page
    await commonFunctions.navigateTo(homePage.specialHotMenuButtonLocator)
    // Click on Desktop category
    await commonFunctions.navigateTo(specialHotPage.desktopCategoryLocator);
    // Add a Product HTC Touch HD to Cart
    await specialHotPage.addAProductWithNameTo("HTC Touch HD", specialHotPage.productAddToCartButton);
    // Wishlist popUp appeared
    await specialHotPage.isPopUpVisiable(specialHotPage.addToCartPopUpLocator);
    // Open a Cart Checkout Page
    await page.goto(Var.cartCheckoutURL);
    // Verify that item has beed added to the cart
    await cartCheckoutPage.verifyElementPresenceInCheckout("HTC Touch HD")
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
})