import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable()
export class AddressBookDataService {
  private lastId: number = 0;
  private contacts = [];
  contact: Contact
  constructor() { }

  /**
   * add contact
   */
  addContact(contact) {
    if(!contact.id) {
     contact.id = this.lastId;
    }
    this.contacts.push(contact.save());
    return this;
  }

  /**
   * delete contact by id
   */
  deleteContactById(id: number){
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    return this;
  }


  /**
   * update value by id
   */
  updateContactById(id: number, values: Contact) {
    let contact: Contact = this.getContactById(id);
    if(!contact) {
      return null;
    }
    Object.assign(contact, values.save());
    return contact;
  }
/**
 * get all contact
 */
  getContacts(): Contact[] {
    return [].concat(this.contacts);
  }
/**
 * get contact by id
 */
  getContactById(id: number) {
    return this.contacts.filter(contact => contact.id === id).pop();
  }

}
