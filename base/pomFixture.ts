import {test as baseTest} from "@playwright/test"
import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import SpecialHotPage from '../pages/specialHotPage';
import WishListPage from '../pages/wishListPage'
// import CommonFunctions from '../utils/commonFunctions'

type pages = {
    loginPage: LoginPage;
    registerPage: RegisterPage;
    homePage: HomePage;
    specialHotPage: SpecialHotPage
    wishListPage: WishListPage
    // commonFunctions: CommonFunctions
}

const testPages = baseTest.extend<pages>({
    registerPage: async({page}, use) => {
        await use(new RegisterPage(page))
    },
    loginPage: async({page}, use) => {
        await use(new LoginPage(page))
    },
    homePage: async({page}, use) => {
        await use(new HomePage(page))
    },
    specialHotPage: async({page}, use) => {
        await use(new SpecialHotPage(page))
    },
    wishListPage: async({page}, use) =>{
        await use(new WishListPage(page))
    },
    // commonFunctions: async({page}, use) => {
    //     await use(new CommonFunctions(page))
    // }
})
export const test = testPages
export const expect = testPages.expect