import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { AddressBookDataService } from '../services/address-book-data.service';

@Component({
  selector: 'address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {
  
  contact:Contact = new Contact();
  constructor(public addressService: AddressBookDataService) { }

  ngOnInit() {
  }

  /**
   * call the addressService and save the contact
   */
  saveContact(event) {
    if(event.mode === "new") {
      this.addressService.addContact(event.contact);
    } else if (event.mode === "edit") {
      this.addressService.updateContactById(event.contact.id, event.contact);
    }
    console.log("called")
  }

  /**
   * call the getContactByid method from addressService and edit contact
   */
  editContact(id) {
    this.contact = new Contact(this.addressService.getContactById(id));
    console.log("Call edit")
  }

  /**
   * Call DeleteContactById() from  addressService and delete contact
   */
  deleteContact(id) {
    console.log("Call del")
   this.addressService.deleteContactById(id);

  }

  /**
   * call getContacts() of addressService display all contact list
   */
  get contacts() {
    return this.addressService.getContacts();
    
  }
}
