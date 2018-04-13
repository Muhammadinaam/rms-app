import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByItemReportComponent } from './sales-by-item-report.component';

describe('SalesByItemReportComponent', () => {
  let component: SalesByItemReportComponent;
  let fixture: ComponentFixture<SalesByItemReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesByItemReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByItemReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
