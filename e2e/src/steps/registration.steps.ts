
import { Before, Given, When, Then } from 'cucumber';
import { expect } from 'chai';

import { RegistrationPage } from '../pages/registration.po';
import { element, by } from 'protractor';

let page : RegistrationPage


Before(() => {
    page = new RegistrationPage();
});

Given(/^I am on the registration page$/, async () => {
    await page.navigateTo();
});
// When(/^I add "{term}"in the firstname field$/,async (text: string) =>{ 
//     await page.getInput(text);
// });
    
When(/^I fill "fistname" field with "kshah"$/,async(text) =>  {
    await page.getInput(text);
});


// When(/^I fill "lastname" field with "shah"$/,async() =>  {

// });

// When(/^I fill "email" field with "kshah@"$/, async() => {

// });
// When(/^I click on the button "registration"$/,async() => {

// });
Then(/^I should be redirected on "home"$/, async () => {
    await page.navigateTo();
});


