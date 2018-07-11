import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesPrintingComponent } from './invoices-printing.component';

describe('InvoicesPrintingComponent', () => {
  let component: InvoicesPrintingComponent;
  let fixture: ComponentFixture<InvoicesPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
