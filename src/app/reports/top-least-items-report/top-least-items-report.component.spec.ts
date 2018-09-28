import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLeastItemsReportComponent } from './top-least-items-report.component';

describe('TopLeastItemsReportComponent', () => {
  let component: TopLeastItemsReportComponent;
  let fixture: ComponentFixture<TopLeastItemsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLeastItemsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLeastItemsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
