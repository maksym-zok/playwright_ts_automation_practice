import { Page, Locator, expect } from "@playwright/test";

export default class HomePage {
        readonly specialHotMenuButtonLocator: Locator;
        readonly homeButtonLocator: Locator;
        readonly blogButtonLocar: Locator;
        readonly myAccountLocator: Locator;
        readonly shopByCategoryButtonLocator: Locator;
        readonly shopByCategoryMenuLocator: Locator;
        readonly shopByCategoryMenuClosedLocator: string;
        readonly shopByCategoryMenuOpenedLocator: string;
        readonly logoSelector: string;
        readonly mainMenuLocator: string;
        readonly searchBarLocator: string;
        readonly mainBlockLocator: string;
        readonly footerLocator: string;
        readonly wishlistLocator: Locator;

    constructor(public page: Page) {
        this.specialHotMenuButtonLocator = page.locator("(//*[contains(text(),' Special')]/../../../a)[2]");
        this.homeButtonLocator = page.locator("//*[contains(text(),'Home')]/../../../a");
        this.blogButtonLocar = page.locator("(//*[contains(text(),'Blog')]/../../../a)[2]");
        this.myAccountLocator = page.locator("(//*[contains(text(),'My account')]/../../../a)[2]");
        this.shopByCategoryButtonLocator = page.locator("(//a[@aria-label='Shop by Category'])[2]");
        this.shopByCategoryMenuLocator = page.locator("//div[@data-position='left']");
        this.shopByCategoryMenuClosedLocator = "mz-pure-drawer d-flex flex-column";
        this.shopByCategoryMenuOpenedLocator = "mz-pure-drawer d-flex flex-column active";
        this.logoSelector = "//img[@alt='Poco Electro']";
        this.mainMenuLocator = "//div[@id='main-navigation']";
        this.searchBarLocator = "(//input[@name='search'])[1]";
        this.mainBlockLocator = "//div[@id='common-home']";
        this.footerLocator = "//footer[@class='footer']";
        this.wishlistLocator = page.locator("//a[@aria-label='Wishlist']");
    }
    async clickOn(buttonLocator: string){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(buttonLocator)
        ])
    }

    async navigateTo(buttonLocator: Locator): Promise<void> {
        await buttonLocator.waitFor({ state: 'attached' });
        await buttonLocator.click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    private async hasClass(locator: Locator, className: string): Promise<boolean> {
        const element = await locator;
        const classAttributeValue = await element.getAttribute('class');
        return classAttributeValue && classAttributeValue.includes(className) || false;
    }

    async shopByCategoryMenuState(expectedState: string) {
        return await this.hasClass(this.shopByCategoryMenuLocator, expectedState);
    }
}