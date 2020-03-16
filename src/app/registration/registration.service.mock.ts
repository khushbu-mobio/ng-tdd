import { Injectable } from '@angular/core';

@Injectable()
export class RegistrationServiceMock {
  constructor() { }

  getUsers(): Array<{}> {
    return [
      {
        firstName: 'kshah',
        lastName: 'shah',
        email: 'k@gmail.com'
      }
    ];
  }
}