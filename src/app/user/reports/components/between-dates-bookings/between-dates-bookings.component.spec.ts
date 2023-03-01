import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenDatesBookingsComponent } from './between-dates-bookings.component';

describe('BetweenDatesBookingsComponent', () => {
  let component: BetweenDatesBookingsComponent;
  let fixture: ComponentFixture<BetweenDatesBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetweenDatesBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetweenDatesBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
