import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-cancelled-orders-report',
  templateUrl: './cancelled-orders-report.component.html',
  styleUrls: ['./cancelled-orders-report.component.css']
})
export class CancelledOrdersReportComponent implements OnInit {

  report_data: any;

  from: '';
  to: '';

  is_order_modal_visible=false;
  order_data:any={
    order_details:[],
  }

  constructor(private reportsService: ReportsService, private orderService: OrdersService) { }

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

  showOrder(order_id){
    this.order_data.order_details = [];
    this.is_order_modal_visible = true;
    this.orderService.getOrderById(order_id)
    .subscribe(data => {

      data['order_details'].forEach(order_detail => {
        this.order_data.order_details.push({
          item_name: order_detail.item_name,
          qty: order_detail.qty,
          rate: order_detail.rate,
          amount: order_detail.qty * order_detail.rate,
        })
      });

    });
  }

}
