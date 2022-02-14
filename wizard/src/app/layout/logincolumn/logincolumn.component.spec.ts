import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincolumnComponent } from './logincolumn.component';

describe('LogincolumnComponent', () => {
  let component: LogincolumnComponent;
  let fixture: ComponentFixture<LogincolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincolumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
