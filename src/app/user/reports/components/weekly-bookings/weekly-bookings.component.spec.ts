import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBookingsComponent } from './weekly-bookings.component';

describe('WeeklyBookingsComponent', () => {
  let component: WeeklyBookingsComponent;
  let fixture: ComponentFixture<WeeklyBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
