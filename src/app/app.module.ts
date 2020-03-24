import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationService } from './registration/registration.service';
import { UserService } from './users/user.service';
import { AddressBookComponent } from './address-book/address-book.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SaveContactComponent } from './save-contact/save-contact.component';
import { AddressBookDataService } from './services/address-book-data.service';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'address-book', component: AddressBookComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UsersComponent,
    RegistrationComponent,
    ContactComponent,
    AddressBookComponent,
    ContactListComponent,
    SaveContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RegistrationService, UserService,AddressBookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
