import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-edits-after-print',
  templateUrl: './edits-after-print.component.html',
  styleUrls: ['./edits-after-print.component.css']
})
export class EditsAfterPrintComponent implements OnInit {

  report_data;

  from: '';
  to: '';

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
  }

  showReport(event:any)
  {
    this.reportsService.editsAfterPrintReport(event.from, event.to, event.show_actual)
      .subscribe( data => {

        this.from = event.from;
        this.to = event.to;

        this.report_data = data;
      });
  }

}
