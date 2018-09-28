import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XReportComponent } from './x-report.component';

describe('XReportComponent', () => {
  let component: XReportComponent;
  let fixture: ComponentFixture<XReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
