import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { AuthService } from '../services/auth.service';
import { TablesService } from '../services/tables.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  form_type = "New";
  order: any = {
    id: null,
    order_type: 1,
  };
  order_types:any = Array();
  free_tables:any = Array();
  is_loading: boolean = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private tablesService: TablesService,
    private authService: AuthService,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (data) => {
        if (data.id != null) {
          this.form_type = "Edit";

          this.is_loading = true;
          this.ordersService.getOrderById(data.id)
            .subscribe(
              (data) => {
                this.order = data;
                this.is_loading = false;

              }
            );
        }

      }
    );

    this.is_loading = true;
    this.ordersService.getOrderTypes()
      .subscribe( data => { this.order_types = data; this.is_loading = false; } );

    this.is_loading = true;
    this.tablesService.getFreeTables()
      .subscribe(data => { this.free_tables = data; this.is_loading = false; });
  }

  onSubmit(value, form_type) {
    this.is_loading = true;

    let id = this.form_type == "New" ? null : this.order.id;

    this.ordersService.saveOrder(value, id)
      .finally(
        () => { this.is_loading = false; }
      )
      .subscribe(
        (data) => {
          this.is_loading = false;

          alert(data['message']);
          if (data['success'] == true) {
            this.router.navigate(['/']);
          }
        }
      );
  }

}
