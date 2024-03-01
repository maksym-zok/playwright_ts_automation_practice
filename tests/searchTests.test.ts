import { expect, test, } from '../base/pomFixture';
import HomePage from "../pages/homePage.ts";
import SearchBar from "../pages/searchBar.ts"

test ("Search for a Product 'iPod'", async({page,baseURL}) => {
    const searchBar = new SearchBar(page, "iPod");
    // Open a home page
    await page.goto(`${baseURL}route=common/home`);
    // Enter "iPod" in the search bar.
    await searchBar.enterTextToSearchBar("iPod");
    // Click the search button.
    await searchBar.clickSearchButton();
    // Verify the display of search results for "iPod"
    // Confirm the presence of product information.
    await searchBar.verifySearchResult("iPod", 15);
})