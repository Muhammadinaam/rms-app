import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { AuthService } from '../services/auth.service';
import { TablesService } from '../services/tables.service';
import { ItemsService } from '../services/items.service';

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
    order_details: Array(),
  };
  deleted_details:any = Array();
  order_types:any = Array();
  free_tables:any = Array();

  new_item = {
    id:0,
    qty:0,
    rate:0
  };

  is_loading: boolean = false;

  items:any = Array();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private tablesService: TablesService,
    private authService: AuthService,
    private itemsService: ItemsService,
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

    this.is_loading = true;
    this.itemsService.getItems()
      .subscribe(data => {this.items = data; this.is_loading = false;});
  }

  onSubmit(value, form_type) {
    this.is_loading = true;

    let id = this.form_type == "New" ? null : this.order.id;

    this.ordersService.saveOrder(this.order, this.deleted_details, id)
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

  newItemChanged(event:any)
  {
    let item_id = event.target.value;
    let item = this.items.filter( item => parseInt(item.id) === parseInt(item_id) )[0];
    this.new_item.rate = item.price;
  }

  removeItem(i)
  {
    let r = confirm("Are you sure to delete the item?");

    if( r != true )
    {
      return; 
    }

    let removed_items = this.order.order_details.splice(i, 1);
    this.deleted_details.push( removed_items[0] );
    
  }

  addNewItem()
  {
    if( this.new_item.id == 0 || this.new_item.qty == 0 )
    {
      alert("Please specify Item and Qty");
      return;
    }

    
    let item = this.items.filter(item => parseInt(item.id) == this.new_item.id )[0];
    this.order.order_details.push(
      {
        detail_id: null,
        item_id: this.new_item.id,
        item_name: item.name,
        qty: this.new_item.qty,
        rate: this.new_item.rate,
      }
    );

    
    //reset
    this.new_item = {
      id:0,
      qty:0,
      rate:0
    }


  }

}
