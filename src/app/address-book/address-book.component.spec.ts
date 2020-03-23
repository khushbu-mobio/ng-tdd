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
    getContacts: () => []
  };
  let addressBookDataService: any;
  const routes: Routes = [
    { path: 'address-book', component: SaveContactComponent },
  ];

  beforeEach(async(() => {
   
    TestBed.configureTestingModule({
      declarations: [ AddressBookComponent,SaveContactComponent,ContactListComponent],
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
    cmp.save.emit(1);
    expect(component.saveContact).toHaveBeenCalledWith(1);
  });

  it('should  call delete method', () => {
    de = fixture.debugElement
    spyOn(component, 'deleteContact');
    const counter = de.query(By.directive(ContactListComponent));
    const cmp = counter.componentInstance;
    cmp.delete.emit(0);
    expect(component.deleteContact).toHaveBeenCalledWith(0);
  });
  it('should  call edit method', () => {
    de = fixture.debugElement
    spyOn(component, 'editContact');
    const counter = de.query(By.directive(ContactListComponent));
    const cmp = counter.componentInstance;
    cmp.edit.emit(0);
    expect(component.editContact).toHaveBeenCalledWith(0);
  });
  
  

});