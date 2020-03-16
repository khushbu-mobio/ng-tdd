import { UserService } from './user.service';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { UserServiceMock } from './users.service.mock';

describe('ContactComponent', () => {
  let comp: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [
            UsersComponent
          ],
          providers: [
              { provide: UserService, useClass: UserServiceMock }
          ]
      }).compileComponents().then(() => {
          fixture = TestBed.createComponent(UsersComponent);
          comp = fixture.componentInstance; // UserComponent test instance
      });
  }));

  it(`should have one user`, async(() => {
      expect(comp.users.length).toEqual(1);
  }));

  // it(`html should render one user`, async(() => {
  //     fixture.detectChanges();
  //     const el = fixture.nativeElement.querySelector('p');
  //     expect(el.innerText).toContain('user1');
  // }));
});
