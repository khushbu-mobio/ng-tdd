import { browser, by, element, promise, ElementFinder } from 'protractor';

export class RegistrationPage {
  
  /**
   * navigate to baseurl
   */
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  /**
   * Get current url you on
   */
  getCurrentUrl() {
    return browser.getCurrentUrl() as Promise<any>;
  }

  /**
   * 
   * Get HTML element by `name`
   */
  getHTMLElementByName(name): ElementFinder {
    return element(by.name(name));
  }

}