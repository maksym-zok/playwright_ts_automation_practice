import {test as baseTest} from "@playwright/test"
import RegisterPage from '../pages/registerPage';
import MyAccountPage from '../pages/myAccountPage';
import HomePage from '../pages/homePage';
import SpecialHotPage from '../pages/specialHotPage';
import WishListPage from '../pages/wishListPage'
import CartCheckoutPage from '../pages/checkoutPage'
import CommonFunctions from '../utils/commonFunctions'
import AddToCartPage from '../pages/addToCartPage'

type pages = {
    myAccountPage: MyAccountPage;
    registerPage: RegisterPage;
    homePage: HomePage;
    specialHotPage: SpecialHotPage
    wishListPage: WishListPage
    cartCheckoutPage: CartCheckoutPage
    commonFunctions: CommonFunctions
    addToCartPage: AddToCartPage
}

const testPages = baseTest.extend<pages>({
    registerPage: async({page}, use) => {
        await use(new RegisterPage(page))
    },
    myAccountPage: async({page}, use) => {
        await use(new MyAccountPage(page))
    },
    homePage: async({page}, use) => {
        await use(new HomePage(page))
    },
    specialHotPage: async({page}, use) => {
        await use(new SpecialHotPage(page))
    },
    wishListPage: async({page}, use) => {
        await use(new WishListPage(page))
    },
    cartCheckoutPage: async({page}, use) => {
        await use(new CartCheckoutPage(page))
    },
    commonFunctions: async({page}, use) => {
        await use(new CommonFunctions(page))
    },
    addToCartPage: async({page}, use) => {
        await use(new AddToCartPage(page))
    }
})
export const test = testPages
export const expect = testPages.expect