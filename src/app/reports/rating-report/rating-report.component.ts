import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-rating-report',
  templateUrl: './rating-report.component.html',
  styleUrls: ['./rating-report.component.css']
})
export class RatingReportComponent implements OnInit {

  constructor(private router: Router, private reportsService: ReportsService) { }

  from: '';
  to: '';

  report_data;

  ngOnInit() {
  }

  showReport(event:any)
  {
    this.reportsService.ratingsReport(event.from, event.to, event.show_actual)
      .subscribe( data => {

        this.from = event.from;
        this.to = event.to;

        this.report_data = data;
      });
  }

  showRatingAddEditForm()
  {
    this.router.navigate(['/rating-add-edit']);
  }

}
