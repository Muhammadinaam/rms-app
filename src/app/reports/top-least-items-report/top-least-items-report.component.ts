import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-top-least-items-report',
  templateUrl: './top-least-items-report.component.html',
  styleUrls: ['./top-least-items-report.component.css']
})
export class TopLeastItemsReportComponent implements OnInit {

  report_data;
  top_by_qty_chart_data:any = null;
  top_by_amount_chart_data:any = null;
  least_by_qty_chart_data:any = null;
  least_by_amount_chart_data:any = null;

  from: '';
  to: '';

  constructor(
    private reportsService: ReportsService
  ) { }

  ngOnInit() {
  }

  generatePieChartData(dataArray)
  {
    var pie_chart_data = {
      labels:[],
      datasets:[
        {
          data:[],
          backgroundColor:[
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "green",
            "gray"
          ],
          hoverBackgroundColor:[

          ]
        }
      ]
    };

    pie_chart_data.datasets[0].data = new Array();
    dataArray.forEach(element => {
      pie_chart_data.labels.push(element.name);
      pie_chart_data.datasets[0].data.push(+element.value);
    });

    return pie_chart_data;
  }

  showReport(event:any)
  {
    this.reportsService.topAndLeastItemsReport(event.from, event.to, event.show_actual)
      .subscribe( data => {

        this.from = event.from;
        this.to = event.to;

        this.report_data = data;

        this.top_by_qty_chart_data = this.generatePieChartData(this.report_data.top_selling_items_by_qty);
        this.top_by_amount_chart_data = this.generatePieChartData(this.report_data.top_selling_items_by_amount);

        this.least_by_qty_chart_data = this.generatePieChartData(this.report_data.least_selling_items_by_qty);
        this.least_by_amount_chart_data = this.generatePieChartData(this.report_data.least_selling_items_by_amount);
        
      });
  }

}
