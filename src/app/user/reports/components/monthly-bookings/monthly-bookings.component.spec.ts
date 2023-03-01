import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyBookingsComponent } from './monthly-bookings.component';

describe('MonthlyBookingsComponent', () => {
  let component: MonthlyBookingsComponent;
  let fixture: ComponentFixture<MonthlyBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
