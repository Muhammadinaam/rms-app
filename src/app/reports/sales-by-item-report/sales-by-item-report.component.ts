import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-sales-by-item-report',
  templateUrl: './sales-by-item-report.component.html',
  styleUrls: ['./sales-by-item-report.component.css']
})
export class SalesByItemReportComponent implements OnInit {

  report_data:any;
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
    this.reportsService.salesReportByItem(event.from, event.to, event.show_actual)
      .subscribe( data => { 

        this.from = event.from;
        this.to = event.to;

        this.report_data = data['report_detail']['orders'];
        this.ent_report_data = data['report_detail']['ent_orders'];
        this.report_summary = data['report_summary']; 

        this.report_data.forEach(element => {
          element.qty = +element.qty;
          element.amount = +element.amount;
        });

      });
  }

}
