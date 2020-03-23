import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Contact } from '../models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'save-contact',
  templateUrl: './save-contact.component.html',
  styleUrls: ['./save-contact.component.css']
})
export class SaveContactComponent implements OnInit {
  addressForm: FormGroup;

  submitted = false;
  @Input()
  contact: Contact;

  @Output()
  save: EventEmitter<Object> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
  ) {
    this.contactForm();
  }

  ngOnInit() {
  }

  /**
* Apply Validation to RegistretForm
*/
  contactForm(): void {
    this.addressForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  /**
 * Access to form fields
 */
  get formValue() { return this.addressForm.controls; }
/**
 * save contact based on mode
 */
  saveContact() {
    this.submitted = true;
    if (!this.addressForm.invalid) {
      const mode = this.contact.id ? "edit" : "new";
      this.save.emit({
        mode: mode,
        contact: this.contact
      });
      this.contact = new Contact();
    }
  }
}
