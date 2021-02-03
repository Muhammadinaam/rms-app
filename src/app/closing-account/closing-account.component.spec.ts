import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingAccountComponent } from './closing-account.component';

describe('ClosingAccountComponent', () => {
  let component: ClosingAccountComponent;
  let fixture: ComponentFixture<ClosingAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
