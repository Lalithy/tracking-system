import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTrackingComponent } from './main-tracking.component';

describe('MainTrackingComponent', () => {
  let component: MainTrackingComponent;
  let fixture: ComponentFixture<MainTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainTrackingComponent]
    });
    fixture = TestBed.createComponent(MainTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
