import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListDialogComponent } from './items-list-dialog.component';

describe('ItemsListDialogComponent', () => {
  let component: ItemsListDialogComponent;
  let fixture: ComponentFixture<ItemsListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
