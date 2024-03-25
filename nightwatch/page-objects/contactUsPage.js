const contactUsPageData = require('../data/testData.json') 
module.exports={
    elements: {
        layout:'div#page > .columns-container',
        body:'body',
        contactForm:'form.contact-form-box',
        mail:'input#email',
        submitButton: 'button#submitMessage > span',
        errorBox: 'div#center_column > .alert.alert-danger',
        unselectedSubjectHeading:'select[id="id_contact"] option[value="0"]',
        webMasterSubjectHeading:'select[id="id_contact"] option[value="1"]',
        customerServiceSubjectHeading:'select[id="id_contact"] option[value="2"]',
        webMasterMessage:".col-md-3.col-xs-12 > p:nth-of-type(3)",
        customerServiceMessage:".col-md-3.col-xs-12 > p:nth-of-type(2)",
        invalidMailCheckBox:".form-error.form-group",
        validMailCheckBox:".form-group.form-ok",
        messageField:"textarea#message",
        noSubjectErrorMessage:"div#center_column li",
        successMessage:"div#center_column > .alert.alert-success",
        fileUpload: "input#fileUpload"

    },

        waitForContactFormVisible(browser){
            return browser.waitForElementVisible(this.elements.contactForm, 2000)
        },
        waitForBodyAndTitle(browser){
            return browser.assert.titleContains(contactUsPageData.contactUs.title)
                        .waitForElementVisible(this.elements.body, 2000);
        },
        selectAssertWebMaster(browser){
            return browser.click(this.elements.webMasterSubjectHeading)
                          .assert.containsText(this.elements.webMasterMessage,contactUsPageData.contactUs.webMasterMessage) 

        },
        selectAssertCustomerService(browser){
            return browser.click(this.elements.customerServiceSubjectHeading)
                          .assert.containsText(this.elements.customerServiceMessage,contactUsPageData.contactUs.customerServiceMessage) 

        },
        insertInvalidMail(browser){
            return browser.setValue(this.elements.mail,contactUsPageData.contactUs.invalidEmail)
                          .click(this.elements.layout)
                          .assert.elementPresent(this.elements.invalidMailCheckBox)
        },
        insertValidMail(browser){
            return browser.setValue(this.elements.mail,contactUsPageData.contactUs.validEmail)
                          .click(this.elements.layout)
                          .assert.elementPresent(this.elements.validMailCheckBox)
        },
        insertMessage(browser){
            return browser.setValue(this.elements.messageField,contactUsPageData.contactUs.Message)
        },
        clickSendButton(browser){
            return browser.click(this.elements.submitButton)
        },
        assertErrorFieldexists(browser){
            return browser.assert.elementPresent(this.elements.errorBox)

        },
        assertErrorFieldexistsWithNoSubjectSelected(browser){
            return browser.assert.elementPresent(this.elements.errorBox)
                          .assert.containsText(this.elements.errorBox,contactUsPageData.contactUs.noSubjectErrorMessage)   

        },
        assertErrorFieldWithNoOrWrongEmail(browser){
            return browser.assert.elementPresent(this.elements.errorBox)
                          .assert.containsText(this.elements.errorBox,contactUsPageData.contactUs.invalidEmailMessage)   

        },
        assertErrorFieldexistsWithNoMessageField(browser){
            return browser.assert.elementPresent(this.elements.errorBox)
                          .assert.containsText(this.elements.errorBox,contactUsPageData.contactUs.noMessageErrorMessage)   

        },
        assertSuccessMessage(browser){
            return browser.assert.elementPresent(this.elements.successMessage)
                          .assert.containsText(this.elements.successMessage,contactUsPageData.contactUs.successMessage)

        },
        assertFileUpload(browser){
            const filePath = contactUsPageData.contactUs.filePath;
            const absoluteFilePath = require('path').resolve(__dirname, filePath);  
            browser.setValue(this.elements.fileUpload, absoluteFilePath);
            const filename = filePath.split('/').pop();
            browser.getValue(this.elements.fileUpload, function(result) {
              const fileValue = result.value;
              browser.assert.ok(fileValue.includes(filename), `Expected '${fileValue}' to contain '${filename}'`);
            });
        },
        insertSpacesInMessage(browser){
            return browser.setValue(this.elements.messageField,'  ');
        },

        insertValidMailwithSpaces(browser){
            return browser.setValue(this.elements.mail,contactUsPageData.contactUs.validEmail + ' ')
                          .click(this.elements.layout)
                          .assert.elementPresent(this.elements.validMailCheckBox)
        }
    };
     
    
    