import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovedBookingsComponent } from './aproved-bookings.component';

describe('AprovedBookingsComponent', () => {
  let component: AprovedBookingsComponent;
  let fixture: ComponentFixture<AprovedBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovedBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprovedBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
