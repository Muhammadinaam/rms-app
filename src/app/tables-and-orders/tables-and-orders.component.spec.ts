import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesAndOrdersComponent } from './tables-and-orders.component';

describe('TablesAndOrdersComponent', () => {
  let component: TablesAndOrdersComponent;
  let fixture: ComponentFixture<TablesAndOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesAndOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesAndOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
