import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintwosideComponent } from './logintwoside.component';

describe('LogintwosideComponent', () => {
  let component: LogintwosideComponent;
  let fixture: ComponentFixture<LogintwosideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogintwosideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogintwosideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
