import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginblueComponent } from './loginblue.component';

describe('LoginblueComponent', () => {
  let component: LoginblueComponent;
  let fixture: ComponentFixture<LoginblueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginblueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
