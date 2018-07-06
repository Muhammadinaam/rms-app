import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-cancelled-orders-report',
  templateUrl: './cancelled-orders-report.component.html',
  styleUrls: ['./cancelled-orders-report.component.css']
})
export class CancelledOrdersReportComponent implements OnInit {

  report_data: any;

  from: '';
  to: '';

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
  }

  showReport(event: any) {
    this.reportsService.cancelledOrdersReport(event.from, event.to)
      .subscribe(data => {

        this.from = event.from;
        this.to = event.to;

        this.report_data = data;
      });
  }

}