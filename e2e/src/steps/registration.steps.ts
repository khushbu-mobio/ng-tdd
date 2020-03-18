import { Before, Given, When, Then, setDefaultTimeout } from 'cucumber';
import { expect } from 'chai';
import { RegistrationPage } from '../pages/registration.po';
import { browser } from 'protractor';

setDefaultTimeout(60 * 1000);
let page: RegistrationPage
Before(() => {
    page = new RegistrationPage();
});

Given(/^I am on the home page$/, async () => {
    await page.navigateTo();
});

When(/^I click on register button$/, function (callback) {
    this.startButton = page.getHTMLElementByName('register');
    this.startButton.click().then(callback);
});

When(/^Open Browser with Registration page$/, async () => {
    expect(await page.getCurrentUrl()).to.contain(browser.baseUrl, "/registration");
})

When(/^After Entering valid First Name, Last Name & Email, click on 'Registration' button$/, async () => {
    await page.getHTMLElementByName('fname').sendKeys("kshah");
    await page.getHTMLElementByName('lname').sendKeys("shah");
    await page.getHTMLElementByName('email').sendKeys("kshah@gmail.com");
    await page.getHTMLElementByName('registration').click();
});

Then(/^Redirect to home page$/, async () => {
    expect(await page.getCurrentUrl()).to.contain(browser.baseUrl, "/home");
});














