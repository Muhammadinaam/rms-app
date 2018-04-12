import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  constructor(
    private reportsService: ReportsService
  ) { }

  ngOnInit() {
  }

  showReport(event:any)
  {
    alert(event.from);
    var from = event.from.toLocaleDateString();
    var to = event.to.toLocaleDateString().slice(0, 19).replace('T', ' ');

    alert(from);


  }

}
