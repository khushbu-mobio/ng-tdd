import { browser, by, element, promise } from 'protractor';

export class RegistrationPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
      }
    
    getInput(text:string){
    //     return element(by.css('input["kshah"]')).sendKeys(text);
     return element(by.id('fname')).sendKeys(text);
    }
}