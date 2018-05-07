import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsAfterPrintComponent } from './edits-after-print.component';

describe('EditsAfterPrintComponent', () => {
  let component: EditsAfterPrintComponent;
  let fixture: ComponentFixture<EditsAfterPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsAfterPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsAfterPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
