import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { ClosingAccountsService } from '../closing-accounts.service';

@Component({
  selector: 'app-open-order',
  templateUrl: './open-order.component.html',
  styleUrls: ['./open-order.component.css']
})
export class OpenOrderComponent implements OnInit {

  math = Math;

  @Input() order:any;
  @Input() closingAccounts: Object;
  @Input() isSalesTaxRateDifferent: boolean;

  is_change_status_modal_visible=false;
  is_close_order_modal_visible=false;
  is_discount_modal_visible=false;
  is_print_for_customer_modal_visible=false;
  received_amount=0;
  ent_remarks='';
  salesTaxRateForPrintForCustomer = -1;

  orderIdForPrintForCustomer = '';

  is_loading=false;
  showItems = false;

  other_info:any = {
    'user_id': '',
    'password': '',
    'remarks': ''
  };

  @Output() modalOpen = new EventEmitter();
  @Output() modalClose = new EventEmitter();
  additionalInfoFields = [];

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

  changeStatus(order_id, status, user_id, password, remarks)
  {
    let r = confirm("Are you sure?")

    if( r != true )
    {
      return; 
    }

    this.ordersService.changeOrderStatus(order_id, status, user_id, password, remarks)
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

  closeOrder(order_id, received_through, ent_remarks)
  {
    let r = confirm('Are you Sure?');

    if( r != true )
      return;

      this.is_loading = true;

    this.ordersService.closeOrder(order_id, received_through, ent_remarks)
      .subscribe(data => {
        
        if(data['success'] == true)
        {
          this.is_close_order_modal_visible = false;
        }
        else
        {
          alert(data['message']);
        }

        this.is_loading = false;
      });
  }

  printForCustomer()
  {
    if(this.isSalesTaxRateDifferent && this.salesTaxRateForPrintForCustomer == -1) {
      alert('Please select account');
      return;
    }

    this.salesTaxRateForPrintForCustomer = this.salesTaxRateForPrintForCustomer == -1 ? 0 : this.salesTaxRateForPrintForCustomer;

    this.ordersService.printForCustomer(this.orderIdForPrintForCustomer, this.salesTaxRateForPrintForCustomer)
      .subscribe(data => {
        alert(data['message']);
        this.is_print_for_customer_modal_visible = false;
      });
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
    //  ORIGINAL CODE
    let sales_tax_rate = this.order.sales_tax / this.order.order_amount_ex_st * 100;
    this.order.order_amount_ex_st = this.order.order_amount_before_discount - this.order.discount;
    this.order.sales_tax = this.order.order_amount_ex_st * sales_tax_rate / 100;
    this.order.order_amount_inc_st = this.order.order_amount_ex_st + this.order.sales_tax;
    

    //  BLVD CODE
    // let sales_tax_rate = this.order.sales_tax / this.order.order_amount_before_discount * 100;
    // this.order.order_amount_ex_st = this.order.order_amount_before_discount;
    // this.order.sales_tax = this.order.order_amount_before_discount * sales_tax_rate / 100;
    // this.order.order_amount_inc_st = this.order.order_amount_ex_st + this.order.sales_tax - this.order.discount;
  }

  saveDiscount()
  {
    if ( this.order.order_amount_before_discount*1 < this.order.discount*1 )
    {
      alert('Discount is greater than Order Amount');
      return;
    }

    this.ordersService.saveDiscount(this.order, this.other_info)
      .subscribe(data => 
        { 
          alert(data['message']);
          if( data['success'] == true )
          {
            this.is_discount_modal_visible = false;
          }
        }, error => {
          alert('Error occurred. Discount was not saved.');
        }
      );
  }

  receivedThroughChanged(received_through) {
    if(this.closingAccounts) {
      let closingAccount = (<Array<any>>this.closingAccounts).find(ca => ca.name == received_through)
      this.additionalInfoFields = JSON.parse(closingAccount.additional_information_fields)
    }
  }

}
