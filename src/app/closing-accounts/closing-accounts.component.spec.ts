import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingAccountsComponent } from './closing-accounts.component';

describe('ClosingAccountsComponent', () => {
  let component: ClosingAccountsComponent;
  let fixture: ComponentFixture<ClosingAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
