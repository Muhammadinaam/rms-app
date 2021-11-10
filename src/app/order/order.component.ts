import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { AuthService } from '../services/auth.service';
import { TablesService } from '../services/tables.service';
import { ItemsService } from '../services/items.service';
import { SettingsService } from '../services/settings.service';
import { ToastrService } from 'ngx-toastr';
import { PriceGroupService } from '../price-group.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  form_type = "New";
  order: any = {
    id: null,
    order_type: '',
    order_details: Array(),
    price_group_id: null,
  };
  deleted_details:any = Array();
  order_types:any = Array();
  free_tables:any = Array();

  other_info:any = {
    'user_id': '',
    'password': '',
    'remarks': ''
  };

  showItems = false;

  sales_tax_rate:any = 0;

  new_item = {
    id:0,
    qty:1,
    rate:0,
    item_notes: '',
  };

  is_loading: boolean = false;

  total_order_amount_interval:any;

  items:any = Array();
  priceGroups:any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private tablesService: TablesService,
    private authService: AuthService,
    private itemsService: ItemsService,
    private settingsService: SettingsService,
    private toastr: ToastrService,
    private priceGroupService: PriceGroupService
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
                this.sales_tax_rate = this.order.sales_tax / this.order.order_amount_ex_st * 100;
              }
            );
        } else {
          
        }

        this.is_loading = true;
        this.ordersService.getOrderTypes()
          .subscribe( data => { 
            this.order_types = data; this.is_loading = false;
            
    
            if(this.form_type != 'Edit') {
              this.is_loading = true;
              this.settingsService.getSettingBySlug('default_order_type')
                .subscribe(data => {
                  this.is_loading = false;
                  let found = this.order_types.find(x => x.name == data['value'])
                  if(found) {
                    this.order.order_type = found.id;
                  }
                });
            }
            
          } );
    
        this.is_loading = true;
        this.tablesService.getFreeTables()
          .subscribe(data => { this.free_tables = data; this.is_loading = false; });
    
        this.is_loading = true;
        this.itemsService.getItems()
          .subscribe(data => {
            this.items = data; 
            this.items.splice(0,0,this.new_item);
            this.is_loading = false;
          });

        this.is_loading = true;
        this.priceGroupService.getPriceGroups()
          .subscribe(data => {
            this.priceGroups = data;
            this.is_loading = false
          })
      }
    );


    this.total_order_amount_interval = setInterval(()=>{
      this.order.order_amount_ex_st = 0;
      this.order.order_details.forEach(element => {
        this.order.order_amount_ex_st += element.qty * element.rate;
      });

      this.order.sales_tax_rate = this.sales_tax_rate;
      this.order.sales_tax = this.order.order_amount_ex_st * this.sales_tax_rate / 100;
      this.order.order_amount_inc_st = this.order.order_amount_ex_st + this.order.sales_tax;

    }, 50);
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

    this.ordersService.saveOrder(this.order, this.deleted_details, id, this.other_info)
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
    this.new_item.rate = event.value.price;
    this.new_item.qty = 1;
    // let item_id = event.target.value;
    // let item = this.items.filter( item => parseInt(item.id) === parseInt(item_id) )[0];
    // this.new_item.rate = item.price;
  }

  editItem(i) {
    
    let itemClone = {...this.order.order_details[i]};

    let newQty = prompt("Enter qty for '"+itemClone['item_name']+"'", itemClone['qty']);
    let newNotes = prompt("Enter notes for '"+itemClone['item_name']+"' (optional)", itemClone['item_notes'] ? itemClone['item_notes'] : '' );

    if ( newQty != itemClone['qty'] || newNotes !=  itemClone['item_notes'])
    {
      itemClone['qty'] = newQty;
      itemClone['item_notes'] = newNotes;
      
      this.removeItem(i)
      itemClone['detail_id'] = null;
      this.order.order_details.splice(i, 0, itemClone);
    }

  }

  removeItem(i, withoutConfirmation = false)
  {
    if (withoutConfirmation) {
      let r = confirm("Are you sure to delete the item?");
  
      if( r != true )
      {
        return; 
      }
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

    let itemToBeAdded = {
      recently_added: true,
      detail_id: null,
      item_id: this.new_item.id,
      item_name: item.name,
      item_notes: this.new_item.item_notes,
      qty: this.new_item.qty,
      rate: this.new_item.rate,
    }

    let existingItem = this.order.order_details.find(ei => {
      return ei.recently_added &&
      ei.item_id == itemToBeAdded.item_id &&
      ei.item_notes == itemToBeAdded.item_notes &&
      ei.rate == itemToBeAdded.rate
    });

    if(existingItem) {
      existingItem.qty += itemToBeAdded.qty;
    } else {
      this.order.order_details.push(itemToBeAdded);
    }

    this.new_item.qty = 1;

    
    this.resetNewItem();

    this.updateRatesAccordingToPriceGroup();


  }

  resetNewItem()
  {
    this.new_item = {
      id:0,
      qty:1,
      rate:0,
      item_notes: '',
    };
  }

  decreaseNewQty()
  {
    this.new_item.qty--;

    if (this.new_item.qty < 0)
    {
      this.new_item.qty = 0;
    }
  }

  increaseNewQty()
  {
    this.new_item.qty++;
  }

  itemClicked(item) {
    this.new_item = item;
    this.new_item.qty = 1;
    this.new_item.rate = item.price;
    this.addNewItem();

    this.toastr.success(
      item.name, 
      'Item Added',
      {
        progressBar: true,
        timeOut: 4000,
        positionClass: 'toast-bottom-left'
      }
    );
  }

  priceGroupChanged() {
    this.updateRatesAccordingToPriceGroup()
  }
  
  updateRatesAccordingToPriceGroup() {
    let priceGroupId = this.order.price_group_id;
    if (!priceGroupId) {
      this.order.order_details.forEach((detail, index) => {
        let itemId = detail.item_id;
        let item = this.items.find(i => i.id == itemId)
        this.order.order_details[index]['rate'] = item.price;
      });
    } else {
      this.order.order_details.forEach((detail, index) => {
        let itemId = detail.item_id;
        let priceGroup = this.priceGroups.find(pg => pg.id == priceGroupId);
        let priceGroupItems = priceGroup.price_group_items;

        let defaultItem = this.items.find(i => i.id == itemId)

        debugger
        let item = priceGroupItems.find(pgi => pgi.item_id == itemId)
        if (item) {
          this.order.order_details[index]['rate'] = item.price;
        } else {
          this.order.order_details[index]['rate'] = defaultItem.price * priceGroup.multiplying_factor;
        }
      });
    }
  }
}
