import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcrudComponent } from './inputcrud.component';

describe('InputcrudComponent', () => {
  let component: InputcrudComponent;
  let fixture: ComponentFixture<InputcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputcrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
