import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-edits-after-print',
  templateUrl: './edits-after-print.component.html',
  styleUrls: ['./edits-after-print.component.css']
})
export class EditsAfterPrintComponent implements OnInit {

  report_data;

  from: '';
  to: '';

  is_edit_detail_modal_visible=false;
  edit_data:any={
    edit_details:[],
  }

  constructor(private reportsService: ReportsService, private ordersService: OrdersService) { }

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

  showEditDetail(to_edit_id)
  {
    this.edit_data.edit_details = [];
    this.is_edit_detail_modal_visible = true;
    this.ordersService.getOrderEditById(to_edit_id)
      .subscribe(data=>{
        data['to_edit_details'].forEach(edit_detail => {
          this.edit_data.edit_details.push({
            item_name: edit_detail.item_name,
            qty: edit_detail.qty,
            rate: edit_detail.rate,
            amount: edit_detail.amount,
            action: edit_detail.edit_type,
          });
        });
      });
  }

}
