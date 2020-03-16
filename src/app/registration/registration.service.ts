import { Injectable } from '@angular/core';

@Injectable()
export class RegistrationService{
    constructor(){}

    getUsers(): Array<{}>{
        return [
            {
                firstName:'kshah',
                lastName:'shah',
                email:'k@gmail.com'
            },
            {
                firstName:'taniya',
                lastName:'jain',
                email:'taniya@gmail.com'
            }
        ];
    }
}