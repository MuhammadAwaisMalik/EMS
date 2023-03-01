import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardContentComponent } from './dashboard-content.component';

describe('DasboardContentComponent', () => {
  let component: DasboardContentComponent;
  let fixture: ComponentFixture<DasboardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasboardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
