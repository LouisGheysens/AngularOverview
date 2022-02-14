import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpurpleComponent } from './loginpurple.component';

describe('LoginpurpleComponent', () => {
  let component: LoginpurpleComponent;
  let fixture: ComponentFixture<LoginpurpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpurpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpurpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
