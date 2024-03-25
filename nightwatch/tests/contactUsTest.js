const contactUsPage = require('../page-objects/contactUsPage.js') 
const contactUsPageData = require('../data/testData.json') 

describe('contact us automation', function() {
    beforeEach(browser => browser.navigateTo(contactUsPageData.contactUs.contactUsUrl));
  
    it('assert contact us form is visible', function(browser) {
      contactUsPage.waitForContactFormVisible(browser)
      contactUsPage.waitForBodyAndTitle(browser)
    });
    it('assert on subject heading message is displayed upon selecting webmaster', function(browser){
      contactUsPage.selectAssertWebMaster(browser);
    });
    it('assert on subject heading message is displayed upon selecting Customer Service', function(browser){
      contactUsPage.selectAssertCustomerService(browser);
    });
    it('assert on inserting invalid value for mail', function(browser){
      contactUsPage.insertInvalidMail(browser)
        
    });
    it('assert on inserting valid value for mail', function(browser){
      contactUsPage.insertValidMail(browser)
        
    });
    it('assert on error message is displayed while inserting value in message field and leaving mail field blank/invalid', function(browser){
      contactUsPage.insertMessage(browser)
      contactUsPage.clickSendButton(browser)
      contactUsPage.assertErrorFieldexists(browser)

    });
    it('assert on error message is displayed while inserting value in message field mail and leaving subject heading dropdown unselected ', function(browser){
      contactUsPage.insertValidMail(browser)
      contactUsPage.insertMessage(browser)
      contactUsPage.clickSendButton(browser)
      contactUsPage.assertErrorFieldexistsWithNoSubjectSelected(browser)

    });
    it('assert on error message is displayed while inserting value in message and mail fields and leaving subject heading dropdown unselected ', function(browser){
      contactUsPage.insertValidMail(browser)
      contactUsPage.insertMessage(browser)
      contactUsPage.clickSendButton(browser)
      contactUsPage.assertErrorFieldexistsWithNoSubjectSelected(browser)

    });
    it('assert on error message is displayed while inserting value in mail and subject heading and leaving message field blank ', function(browser){
      contactUsPage.insertValidMail(browser)
      contactUsPage.clickSendButton(browser)
      contactUsPage.assertErrorFieldexistsWithNoMessageField(browser)

    });
    it('assert on success message when filling the form with valid values', function(browser){
      contactUsPage.insertValidMail(browser)
      contactUsPage.insertMessage(browser)
      contactUsPage.selectAssertCustomerService(browser);
      contactUsPage.clickSendButton(browser)
      contactUsPage.assertSuccessMessage(browser)
    });

    it('Testing file upload', function (browser) {
      contactUsPage.assertFileUpload(browser);
    });

    it('assert on error message is displayed while inserting spaces in message and valid email and subkect heading', function(browser){
      contactUsPage.selectAssertCustomerService(browser);
      contactUsPage.insertValidMail(browser);
      contactUsPage.insertSpacesInMessage(browser)
      contactUsPage.clickSendButton(browser)
      contactUsPage.assertErrorFieldexistsWithNoMessageField(browser)

    });
    it('assert on error message is displayed while inserting value in message and leaving mail empty and subject heading dropdown unselected ', function(browser){
      contactUsPage.insertMessage(browser)
      contactUsPage.clickSendButton(browser)
      contactUsPage.assertErrorFieldWithNoOrWrongEmail(browser)

    });


	  it('Entering valid email only with spaces after it', function (browser) {
      contactUsPage.insertValidMailwithSpaces(browser);
    
	  });


    after(browser => browser.end());
  });