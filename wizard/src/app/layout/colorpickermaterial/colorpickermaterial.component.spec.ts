import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpickermaterialComponent } from './colorpickermaterial.component';

describe('ColorpickermaterialComponent', () => {
  let component: ColorpickermaterialComponent;
  let fixture: ComponentFixture<ColorpickermaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorpickermaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorpickermaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
