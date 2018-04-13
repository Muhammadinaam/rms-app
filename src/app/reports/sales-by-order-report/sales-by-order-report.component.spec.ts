import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByOrderReportComponent } from './sales-by-order-report.component';

describe('SalesByOrderReportComponent', () => {
  let component: SalesByOrderReportComponent;
  let fixture: ComponentFixture<SalesByOrderReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesByOrderReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByOrderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
