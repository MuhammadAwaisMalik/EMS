import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledBookingsComponent } from './canceled-bookings.component';

describe('CanceledBookingsComponent', () => {
  let component: CanceledBookingsComponent;
  let fixture: ComponentFixture<CanceledBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CanceledBookingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CanceledBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
