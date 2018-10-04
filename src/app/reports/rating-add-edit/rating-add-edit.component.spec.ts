import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAddEditComponent } from './rating-add-edit.component';

describe('RatingAddEditComponent', () => {
  let component: RatingAddEditComponent;
  let fixture: ComponentFixture<RatingAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
