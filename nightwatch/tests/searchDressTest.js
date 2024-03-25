const searchDressPage = require('../page-objects/searchDressPage.js') 
const searchDresssPageData = require('../data/testData.json') 


describe('Search Dress', function () {
    before(browser => browser.navigateTo(searchDresssPageData.searchDress.searchDressUrl));
  
    it('assert search result are all dresses', function (browser) {
      searchDressPage.waitForBodyAndSearchBox(browser);
      searchDressPage.searchForDress(browser);
      searchDressPage.waitForResults(browser)
      searchDressPage.checkResults(browser);
   

    });
    
    after(browser => browser.end());
});