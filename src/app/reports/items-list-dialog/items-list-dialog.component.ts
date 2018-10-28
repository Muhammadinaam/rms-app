import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items-list-dialog',
  templateUrl: './items-list-dialog.component.html',
  styleUrls: ['./items-list-dialog.component.css']
})
export class ItemsListDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dialogVisibilityValue : boolean;

  @Output()
  dialogVisibilityChange = new EventEmitter<boolean>();

  @Input()
  get dialogVisibility(){
    return this.dialogVisibilityValue;
  }

  set dialogVisibility(val) {
    this.dialogVisibilityValue = val;
    this.dialogVisibilityChange.emit(this.dialogVisibilityValue);
  }

  @Input()
  items_detail;

  @Input()
  show_action_columns;

}
