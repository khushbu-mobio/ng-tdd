import { TestBed, inject } from '@angular/core/testing';

import { AddressBookDataService } from './address-book-data.service';
import { Contact } from '../models/contact';

describe('AddressBookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressBookDataService]
    });
  });

  it('should be created', inject([AddressBookDataService], (service: AddressBookDataService) => {
    expect(service).toBeTruthy();
  }));

    it('should return empty array by default', inject([AddressBookDataService], (service: AddressBookDataService) => {
      expect(service.getContacts()).toEqual([]);
    }));

    it('should return all the contacts', inject([AddressBookDataService], (service: AddressBookDataService) => {
      let contact1 = new Contact({
        firstName: 'kshah',
        lastName: 'Ssadark',
        phone: ' 234998100',
        country: 'india'
      });
      let contact2 = new Contact({
        firstName: 'asdsd',
        lastName: 'aksnd',
        phone: '+1 200455876',
        country: 'UK'
      });

      service.addContact(contact1);
      service.addContact(contact2);

      expect(service.getContacts()).toEqual([contact1, contact2]);
    }));

    it('should add contact', inject([AddressBookDataService], (service: AddressBookDataService) => {
      let contact1 = new Contact({
        firstName: 'Tsdfdony',
        lastName: 'asds',
        phone: '+1 234998100',
        country: 'US'
      });
      service.addContact(contact1);
      expect(service.getContacts()).toEqual([contact1]);
    }));

  
    it('should delete the contact with corresponding id', inject([AddressBookDataService], (service: AddressBookDataService) => {
      let contact1 = new Contact({
        firstName: 'Tdsasfony',
        lastName: 'Stsdfark',
        phone: '9999909989',
        country: ' india'
      });
      
      service.addContact(contact1);
      expect(service.getContacts()).toEqual([contact1]);

      service.deleteContactById(0);
      
      expect(service.getContacts()).toEqual([]);
    }));
    it('should update the existing contact with provided values', inject([AddressBookDataService], (service: AddressBookDataService) => {
        let contact1 = new Contact({
          firstName: 'Tony',
          lastName: 'Stark',
          phone: '+1 234998100',
          country: 'United States of America'
        });
        
        service.addContact(contact1);
        service.updateContactById(1, new Contact({
          firstName: 'Jsdfohn',
          lastName: 'Resdfed'
        }));
  
        expect(service.getContactById(0).firstName).toEqual(contact1.firstName);
      }));

    it('should return null in case no contact found for provided id', inject([AddressBookDataService], (service: AddressBookDataService) => {
      expect(service.updateContactById(1, new Contact({
        firstName: 'Johfsdfn',
        lastName: 'Resdfed'
      }))).toBeNull();
    }));

    it('should return contact with provided id', inject([AddressBookDataService], (service: AddressBookDataService) => {
      let contact1 = new Contact({
        firstName: 'Tsdfony',
        lastName: 'Stdsfark',
        phone: '234998100',
        country: 'China'
      });
      
      service.addContact(contact1);
      expect(service.getContactById(0)).toEqual(contact1);
    }));

    it('should return undefiend in case no contact found with provided id', inject([AddressBookDataService], (service: AddressBookDataService) => {
      expect(service.getContactById(1)).toBeUndefined();
    }));

});