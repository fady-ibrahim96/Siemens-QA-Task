const searchDressPageData = require('../data/testData.json') 
module.exports={
    elements: {
        body:'body',
        searchField:'#search_query_top',
        searchButton:'#searchbox button[name="submit_search"]',
        searchResult:'#product_list',
        reultsElement: '.product_list .product-name'

    },
        waitForBodyAndSearchBox(browser){
            return browser.waitForElementVisible(this.elements.body, 2000)
                            .waitForElementVisible(this.elements.searchField,2000);
        },
        searchForDress(browser){
            return browser.setValue(this.elements.searchField, searchDressPageData.searchDress.searchWord)
                        .click(this.elements.searchButton)
        },
        waitForResults(browser){
            return browser.waitForElementVisible(this.elements.searchResult, 2000)
                           
        },
        checkResults(browser){
            browser.elements('css selector', this.elements.reultsElement, function (result) {
                const productNameElements = result.value;
                
                productNameElements.forEach(async function (productNameElement) {
                    const [elementId, productId] = Object.entries(productNameElement)[0]; // Get the first entry directly
                    browser.elementIdText(productId, function (productName) {
                        const productNameText = productName.value;
                        browser.assert.ok(
                            productNameText.toLowerCase().includes('dress'),
                            `Product name "${productNameText}" should contain 'dress'`
                        );
                    });
                });
            });
        }
    };
     
    
    