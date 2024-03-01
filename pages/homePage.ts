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
    }

    async navigateToPage(buttonLocator: Locator): Promise<void> {
        await buttonLocator.waitFor({ state: 'attached' });
        await buttonLocator.click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    private async hasClass(locator: Locator, className: string): Promise<boolean> {
        const element = await locator;
        const classAttributeValue = await element.getAttribute('class');
        return classAttributeValue && classAttributeValue.includes(className) || false;
    }

    async isElementPresent(locator: Locator, elementName: string): Promise<boolean> {
        const elementLocator = await locator;
        const isPresent = await elementLocator.isVisible();
        return isPresent;
    }

    private async verifyElementPresence(locator: Locator, elementName: string): Promise<void> {
        const isElementPresent = await this.isElementPresent(locator, elementName);
        if (isElementPresent) {
            console.log(`${elementName} is present`);
        } else {
            console.error(`${elementName} is absent`);
        }
    }

    async verifyLogoPresence(): Promise<void> {
        await this.verifyElementPresence(this.page.locator(this.logoSelector), 'Logo');
    }

    async verifyMainMenuPresence(): Promise<void> {
        await this.verifyElementPresence(this.page.locator(this.mainMenuLocator), 'Main Menu');
    }

    async verifySearchBarPresence(): Promise<void> {
        await this.verifyElementPresence(this.page.locator(this.searchBarLocator), 'Search Bar');
    }

    async verifyMainBlockPresence(): Promise<void> {
        await this.verifyElementPresence(this.page.locator(this.mainBlockLocator), 'Main Block');
    }

    async verifyFooterPresence(): Promise<void> {
        await this.verifyElementPresence(this.page.locator(this.footerLocator), 'Footer');
    }

    async navigateToHomePage() {
        await this.navigateToPage(this.homeButtonLocator);
    }

    async navigateToSpecialHotPage() {
        await this.navigateToPage(this.specialHotMenuButtonLocator);
    }
    
    async navigateToBlogPage(){
        await this.navigateToPage(this.blogButtonLocar);
    }
    async navigateToMyAccountPage(){
        await this.navigateToPage(this.myAccountLocator);
    }
    async clickOnShopByCategoryButton(){
        await this.shopByCategoryButtonLocator.click();
    }   
    async shopByCategoryMenuClosed(){
        await this.hasClass(this.shopByCategoryMenuLocator, this.shopByCategoryMenuClosedLocator);
    }
    async shopByCategoryMenuOpened(){
        await this.hasClass(this.shopByCategoryMenuLocator, this.shopByCategoryMenuOpenedLocator);
    }
}