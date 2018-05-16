import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-sales-by-order-report',
  templateUrl: './sales-by-order-report.component.html',
  styleUrls: ['./sales-by-order-report.component.css']
})
export class SalesByOrderReportComponent implements OnInit {

  report_data;
  ent_report_data:any = new Array();
  report_summary:any = {
    'receipt_detail': [],
    'st_and_discount': {
      'total_sales_tax': 0,
      'total_discount': 0,
    }
  };

  from: '';
  to: '';

  constructor(
    private reportsService: ReportsService
  ) { }

  ngOnInit() {
  }

  showReport(event:any)
  {
    this.reportsService.salesReportByOrder(event.from, event.to, event.show_actual)
      .subscribe( data => {

        this.from = event.from;
        this.to = event.to;

        this.report_data = data['report_detail']['orders'];
        this.ent_report_data = data['report_detail']['ent_orders'];
        this.report_summary = data['report_summary'];
      });
  }

}
