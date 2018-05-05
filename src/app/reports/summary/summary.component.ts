import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() report_summary:any = {
    'receipt_detail': [],
    'st_and_discount': {
      'total_sales_tax': 0,
      'total_discount': 0,
    }
  };  

  constructor() { }

  ngOnInit() {
  }

}
