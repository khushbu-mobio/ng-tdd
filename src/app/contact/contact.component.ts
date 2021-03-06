import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input()
  contact: Contact;

  /**
   * can fire to send data to its parent for edit contact.
   */
  @Output()
  edit:EventEmitter<number> = new EventEmitter();


  /**
   * can fire to send data to its parent for delete contact.
   */
  @Output()
  delete:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editContact() {
    this.edit.emit(this.contact.id);
  }

  deleteContact() {
    this.delete.emit(this.contact.id);
  }

}
