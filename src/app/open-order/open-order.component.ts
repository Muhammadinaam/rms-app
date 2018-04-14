import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-open-order',
  templateUrl: './open-order.component.html',
  styleUrls: ['./open-order.component.css']
})
export class OpenOrderComponent implements OnInit {

  @Input() order:any;

  is_change_status_modal_visible=false;
  is_close_order_modal_visible=false;
  is_discount_modal_visible=false;
  received_amount=0;

  

  @Output() modalOpen = new EventEmitter();
  @Output() modalClose = new EventEmitter();

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    
  }

  showChangeStatusModal()
  {
    this.is_change_status_modal_visible=true;
  }

  showCloseOrderModal()
  {
    this.is_close_order_modal_visible=true;
  }

  showDiscountModal()
  {
    this.is_discount_modal_visible=true;
  }

  onModalShow(event)
  {
    this.modalOpen.emit();
  }

  changeStatus(order_id, status)
  {
    let r = confirm("Are you sure?")

    if( r != true )
    {
      return; 
    }

    this.ordersService.changeOrderStatus(order_id, status)
      .subscribe( data => {
          
          if(data['success'] == true)
          {
            this.is_change_status_modal_visible = false;
          }
          else
          {
            alert(data['message']); 
          }
        });
  }

  onModalHide(event)
  {
    this.modalClose.emit();
  }

  closeOrder(order_id, received_through)
  {
    let r = confirm('Are you Sure?');

    if( r != true )
      return;

    this.ordersService.closeOrder(order_id, received_through)
      .subscribe(data => {
        
        if(data['success'] == true)
        {
          this.is_close_order_modal_visible = false;
        }
        else
        {
          alert(data['message']);
        }
      });
  }

  printForCustomer(order_id)
  {
    this.ordersService.printForCustomer(order_id)
      .subscribe();
  }

  reprintForKitchens(order_id)
  {
    let r = confirm("Are you sure to reprint order for kitchens?")

    if(  r != true)
    {
      return;
    }

    this.ordersService.reprintForKitchens(order_id)
      .subscribe();

    
  }

  discountPercentBlur(event:any)
  {
    let discount_percent = event.target.value;
    this.order.discount = this.order.order_amount_before_discount * discount_percent / 100;
    this.calculateOrderAmounts();
  }

  discountAmountBlur(event:any)
  {
    this.order.discount = event.target.value;
    this.calculateOrderAmounts();
  }

  calculateOrderAmounts()
  {
    let sales_tax_rate = this.order.sales_tax / this.order.order_amount_ex_st * 100;

    this.order.order_amount_ex_st = this.order.order_amount_before_discount - this.order.discount;
    this.order.sales_tax = this.order.order_amount_ex_st * sales_tax_rate / 100;
    this.order.order_amount_inc_st = this.order.order_amount_ex_st - this.order.sales_tax;
  }

  saveDiscount()
  {
    if ( this.order.order_amount_before_discount*1 < this.order.discount*1 )
    {
      alert('Discount is greater than Order Amount');
      return;
    }

    this.ordersService.saveDiscount(this.order)
      .subscribe(data => 
        { 
          alert(data['message']);
          if( data['success'] == true )
          {
            this.is_discount_modal_visible = false;
          }
        }
      );
  }

}
