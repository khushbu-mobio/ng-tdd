
// import { Before, Given, When, Then } from 'cucumber';
// import { expect } from 'chai';
// import { AppPage } from '../pages/app.po';

// let page : AppPage

// Before(() => {
//     page = new AppPage();
// });

// Given(/^I am on the home page$/, async () => {
//     await page.navigateTo();
// });

// When(/^I do nothing$/, () => {});

// Then(/^I should see the title$/, async () => {
//     expect(await page.getTitleText()).to.equal('Welcome to Angular Unit Testing!')
// })
// /////////////////////////////

// When(/^I click on register button$/, function (callback) {
//     this.startButton = page.getHTMLElementById('register');
//     this.startButton.click().then(callback);

// });



// When(/^Open Browser with Registration page $/, function (callback)  {
//     //expect(await page.getCurrentUrl()).to.contain('/registration');
//     this.getCurrentUrl = expect(page.getCurrentUrl()).to.equal('/registration');
//     this.getCurrentUrl.then(callback);
//      //page.getCurrentUrl().then(callback);
// });

// ////////////
// When(/^Open Browser with Registration page$/, async () => {
//     // expect(await page.getCurrentUrl()).to.contain('http://localhost:4200/registration');
//    // expect(await page.getCurrentUrl()).to.contain(browser.params.getCurrentUrl);
//     // expect(await page.getCurrentUrl()).to.contain('.registration');
//     expect(await page.getCurrentUrl()).to.contain(browser.baseUrl,"/registration");
// })