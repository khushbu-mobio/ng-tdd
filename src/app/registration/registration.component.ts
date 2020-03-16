import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  /**
   * Declarations
   */
  registerForm: FormGroup;
  data;
  submitted = false;
  text = 'Registration';

  /**
   * pass parameter FormBuilder and RegService constuctor  and call regForm()
   */
  constructor(
    private formBuilder: FormBuilder,
    private regService: RegistrationService,
    public router: Router,
  ) {
    this.regForm();
  }

  /**
   * Access getUsers() method of RegService
   */
  ngOnInit() {
    this.data = this.regService.getUsers();
    console.log("reg =>", this.registerForm);
  }

  /**
  * Apply Validation to RegistretForm
  */
  regForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /**
  * Access to form fields
  */
  get formValue() { return this.registerForm.controls; }

  /**
   * submitted true from false
   */
  onSubmit() {
    this.submitted = true;
    if(!this.registerForm.invalid){
      this.router.navigate(['/home']);
    }
  }

  /**
   * Reset form fields
   */
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
