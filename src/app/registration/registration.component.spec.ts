import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { Location } from "@angular/common";
import { Router, Routes, RouterModule } from "@angular/router";
import { RegistrationService } from './registration.service';

const data = {
  firstName: 'kshah',
  lastName: 'shah',
  email: 'k@gmail.com'
}
describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let location: Location;
  let router: Router;

  const routes: Routes = [
    { path: 'registration', component: RegistrationComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
      ],
      providers: [
        RegistrationService
      ]
    })
      .compileComponents().then(() => {
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(RegistrationComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

  it('should Navigate to /registration', fakeAsync(() => {
    router.navigate(["/registration"]).then(() => {
      expect(location.path()).toBe("/registration");
    });
  }));

  it('should be created registration component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'Registration'`, async(() => {
    expect(component.text).toEqual('Registration');
  }));

  it(`should set submitted true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method`, async(() => {
    component.registerForm.setValue({ firstName: 'kshah', lastName: 'shah', email: 'kscn@gmail.com' });
    spyOn(component, 'onSubmit');
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

  it(`form should be invalid`, async(() => {
    component.registerForm.setValue({ firstName: '', lastName: '', email: '' });
    expect(component.registerForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.registerForm.setValue({ firstName: 'kshah', lastName: 'shah', email: 'k@gmail.com' });
    expect(component.registerForm.valid).toBeTruthy();
  }));

  it(`not valid email`, async(() => {
    component.registerForm.setValue({ firstName: 'kshah', lastName: 'shah', email: 'kscn' });
    expect(component.registerForm.valid).toBeFalsy();
  }));

  it(`should not called onsubmit if the form is not valid`, async(() => {
    component.registerForm.setValue({ firstName: 'kshah', lastName: 'shah', email: 'kscn' });
    spyOn(component, 'onSubmit');
    fixture.detectChanges();
    expect(component.onSubmit).not.toHaveBeenCalled();
  }));

  it(`should called onsubmit if the form is  valid and navigate to home`, async(() => {
    component.registerForm.setValue({ firstName: 'kshah', lastName: 'shah', email: 'kscn@gmail.com' });
    spyOn(component.router, 'navigate');
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.router.navigate).toHaveBeenCalledWith(['/home']);
  }));

  it(`should call onReset and  set submitted false`, async(() => {
    component.onReset();
    expect(component.submitted).toBeFalsy();
  }));

  it(`should call reset function on onReset`, async(() => {
    spyOn(component.registerForm, 'reset');
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
     component.onReset();
    expect(component.registerForm.reset).toBeTruthy();
  }));

  it('html should render one user', async(() => {
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('td');
    expect(el.innerText).toContain('0');
  }));
});

