import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { AuthService } from '../services/auth.service';
import { TablesService } from '../services/tables.service';
import { ItemsService } from '../services/items.service';
import { SettingsService } from '../services/settings.service';

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

  sales_tax_rate:any;

  new_item = {
    id:0,
    qty:0,
    rate:0
  };

  is_loading: boolean = false;

  total_order_amount_interval:any;

  items:any = Array();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private tablesService: TablesService,
    private authService: AuthService,
    private itemsService: ItemsService,
    private settingsService: SettingsService
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

    this.is_loading = true;
    this.settingsService.getSettingBySlug('sales_tax_rate')
      .subscribe(data => {
        this.is_loading = false;
        this.sales_tax_rate = data['value'];
      });

    this.total_order_amount_interval = setInterval(()=>{
      this.order.order_amount_ex_st = 0;
      this.order.order_details.forEach(element => {
        this.order.order_amount_ex_st += element.qty * element.rate;
      });

      this.order.sales_tax = this.order.order_amount_ex_st * this.sales_tax_rate / 100;
      this.order.order_amount_inc_st = this.order.order_amount_ex_st + this.order.sales_tax;

    }, 100);
  }

  ngOnDestroy()
  {
    if( this.total_order_amount_interval )
    {
      clearInterval(this.total_order_amount_interval);
    }
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
            this.router.navigate(['/table-and-orders']);
            
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

    
    this.resetNewItem();


  }

  resetNewItem()
  {
    this.new_item = {
      id:0,
      qty:0,
      rate:0
    };
  }

}
