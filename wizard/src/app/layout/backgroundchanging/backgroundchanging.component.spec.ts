import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundchangingComponent } from './backgroundchanging.component';

describe('BackgroundchangingComponent', () => {
  let component: BackgroundchangingComponent;
  let fixture: ComponentFixture<BackgroundchangingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundchangingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundchangingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
