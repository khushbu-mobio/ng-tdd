import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { Location } from "@angular/common";
import { Router, Routes, RouterModule } from "@angular/router";
import { SaveContactComponent } from './save-contact.component';
import { Contact } from '../models/contact';
import { AddressBookComponent } from '../address-book/address-book.component';

describe('SaveContactComponent', () => {
  let component: SaveContactComponent;
  let fixture: ComponentFixture<SaveContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let location: Location;
  let router: Router;

  const routes: Routes = [
    { path: 'address-book', component: SaveContactComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaveContactComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
       RouterModule.forRoot(routes)
      ],
   
    })
      .compileComponents()
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(SaveContactComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should set submitted true`, async(() => {
    component.saveContact();
    expect(component.submitted).toBeTruthy();
  }));
  it(`should call the saveContact method`, async(() => {

    let testContact = new Contact({
      firstName: 'Richa',
      lastName: 'Gupta',
      phone: '+91 9817852819',
      country: 'India'
    });
    component.contact = testContact;
    fixture.detectChanges();
    spyOn(component, 'saveContact');
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.saveContact).toHaveBeenCalled();
  }));

  it(`form should be invalid`, async(() => {
    component.addressForm.setValue({ 
      firstName: '',
      lastName: 'Gupta',
      phone: '+91 9817852819',
      country: 'India'
    });
    expect(component.addressForm.valid).toBeFalsy();
  }));
  it(`form should be valid`, async(() => {
    component.addressForm.setValue({ 
      firstName: 'misha',
      lastName: 'Gupta',
      phone: '+91 9817852819',
      country: 'India'
    });
    expect(component.addressForm.valid).toBeTruthy();
  }));
  it('should save new contact', () => {
    let mode: string;
    let contact: Contact;
    component.save.subscribe((event) => {
      mode = event.mode;
      contact = event.contact
    });
    
    let testContact = new Contact({
      firstName: 'Richa',
      lastName: 'Gupta',
      phone: '+91 9817852819',
      country: 'India'
    });
    component.contact = testContact;
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.whenStable().then(() => {
      el.click();
      expect(mode).toEqual('new');
      expect(contact.firstName).toEqual(testContact.firstName);
    });

  });

  it('should save updated contact', () => {
    let mode: string;
    let contact: Contact;
    let testCountry: string = 'United States of America';

    de = fixture.debugElement.query(By.css('input[name=country]')).nativeElement;
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    component.save.subscribe((event) => {
      mode = event.mode;
      contact = event.contact
    })

    let testContact = new Contact({
      id: 123,
      firstName: 'Richa',
      lastName: 'Gupta',
      phone: '+91 9817852819',
      country: 'India'
    });

    component.contact = testContact;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      el.click();
      expect(mode).toEqual('edit');
      expect(testCountry).toEqual(testCountry);
    });
    
  });
 
});
  


