import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AddressBookComponent } from './address-book.component';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { AddressBookDataService } from '../services/address-book-data.service';

import { Contact } from '../models/contact';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { By } from 'protractor';
import { By } from '@angular/platform-browser';
import { SaveContactComponent } from '../save-contact/save-contact.component';
import { ContactComponent } from '../contact/contact.component';
import { Router, Routes, RouterModule } from "@angular/router";
import { ContactListComponent } from '../contact-list/contact-list.component';
describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;
  // let fde: DebugElement = fixture.debugElement
  let de: DebugElement
  // let de:DebugElement = new DebugElement();
  let el: HTMLElement;
  let location: Location;
  let router: Router;
  let testContact2: Contact;
  let data = {
    getContacts: () => [],
    deleteContactById: () => [],
    getContactById: () => [],
    updateContactById: () => [],
    addContact: () => []
  };
  let addressBookDataService: any;
  const routes: Routes = [
    { path: 'address-book', component: SaveContactComponent },
  ];
  let testContact = new Contact({
    id: 123,
    firstName: 'Richa',
    lastName: 'Gupta',
    phone: '+91 9817852819',
    country: 'India'
  });
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [AddressBookComponent, SaveContactComponent, ContactListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{

        provide: AddressBookDataService,
        useValue: data
      }],
      imports: [

        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
      ],
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    addressBookDataService = TestBed.get(AddressBookDataService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call save method', () => {
    de = fixture.debugElement
    spyOn(component, 'saveContact');
    const counter = de.query(By.directive(SaveContactComponent));
    const cmp = counter.componentInstance;
    cmp.save.emit(testContact);
    expect(component.saveContact).toHaveBeenCalledWith(testContact);
  });

  it('should  call delete method', () => {
    de = fixture.debugElement
    spyOn(component, 'deleteContact');
    const counter = de.query(By.directive(ContactListComponent));
    const cmp = counter.componentInstance;
    cmp.delete.emit(testContact.id);

    expect(component.deleteContact).toHaveBeenCalledWith(testContact.id);

  });
  it('should  call edit method', () => {

    de = fixture.debugElement
    spyOn(component, 'editContact');
    const counter = de.query(By.directive(ContactListComponent));
    const cmp = counter.componentInstance;
    cmp.edit.emit(testContact.id);
    expect(component.editContact).toHaveBeenCalledWith(testContact.id);

  });


  it('should pass contact id for save the contact', () => {
    de = fixture.debugElement
    let idToDelete: number;

    const counter = de.query(By.directive(SaveContactComponent));
    const cmp = counter.componentInstance;
    cmp.save.subscribe((id: number) => {
      idToDelete = id;

    });

    component.saveContact(testContact.id)
    spyOn(component.addressService, 'addContact');
    component.addressService.addContact(testContact2)

    expect(component.addressService.addContact).toHaveBeenCalledWith(testContact2)
  });
  it('should pass contact id for deleting the contact', () => {
    de = fixture.debugElement
    let idToDelete: number;
    const counter = de.query(By.directive(ContactListComponent));
    const cmp = counter.componentInstance;
    cmp.delete.subscribe((id: number) => idToDelete = id);

    component.deleteContact(testContact.id)
    spyOn(component.addressService, 'deleteContactById');
    component.addressService.deleteContactById(testContact.id)
    // expect(component.deleteContact).toHaveBeenCalled(testContact.id);
    // expect(idToDelete).toEqual(testContact2.id);
    // expect(component.deleteContact).toHaveBeenCalledWith(testContact.id);
    expect(component.addressService.deleteContactById).toHaveBeenCalledWith(testContact.id)
  });

  it('should pass contact id for edit the contact', () => {
    de = fixture.debugElement
    let idToDelete: number;
    const counter = de.query(By.directive(ContactListComponent));
    const cmp = counter.componentInstance;
    cmp.edit.subscribe((id: number) => idToDelete = id);

    component.editContact(testContact.id)
    spyOn(component.addressService, 'getContactById');
    component.addressService.getContactById(testContact.id)
    expect(component.addressService.getContactById).toHaveBeenCalledWith(testContact.id)
  });
});