import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-sales-by-order-report',
  templateUrl: './sales-by-order-report.component.html',
  styleUrls: ['./sales-by-order-report.component.css']
})
export class SalesByOrderReportComponent implements OnInit {

  report_data;

  constructor(
    private reportsService: ReportsService
  ) { }

  ngOnInit() {
  }

  showReport(event:any)
  {
    this.reportsService.salesReportByOrder(event.from, event.to)
      .subscribe( data => { this.report_data = data; } );
  }

}
