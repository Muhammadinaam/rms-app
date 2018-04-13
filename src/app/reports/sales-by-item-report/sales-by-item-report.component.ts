import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-sales-by-item-report',
  templateUrl: './sales-by-item-report.component.html',
  styleUrls: ['./sales-by-item-report.component.css']
})
export class SalesByItemReportComponent implements OnInit {

  data:any;

  constructor(
    private reportsService: ReportsService
  ) { }

  ngOnInit() {
  }

  showReport(event:any)
  {
    this.reportsService.salesReportByItem(event.from, event.to)
      .subscribe( data => { this.data = data; } );
  }

}
