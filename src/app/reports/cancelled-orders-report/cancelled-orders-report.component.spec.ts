import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledOrdersReportComponent } from './cancelled-orders-report.component';

describe('CancelledOrdersReportComponent', () => {
  let component: CancelledOrdersReportComponent;
  let fixture: ComponentFixture<CancelledOrdersReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledOrdersReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledOrdersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
