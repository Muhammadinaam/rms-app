import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dates-filter',
  templateUrl: './dates-filter.component.html',
  styleUrls: ['./dates-filter.component.css']
})
export class DatesFilterComponent implements OnInit {

  constructor() { }

  to:any;
  from:any;

  ngOnInit() {
  }

  @Output() onShowBtnClicked = new EventEmitter<any>();

  onClicked()
  {
    if( this.to == null || this.from == null )
    {
      alert('Please specify From and To Dates');
      return;
    }

    this.onShowBtnClicked.emit( { to: this.to, from:this.from } );
  }



}
