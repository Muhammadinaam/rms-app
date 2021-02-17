import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { TablesService } from '../services/tables.service';
import { ClosingAccountsService } from '../closing-accounts.service';

@Component({
  selector: 'app-tables-and-orders',
  templateUrl: './tables-and-orders.component.html',
  styleUrls: ['./tables-and-orders.component.css']
})
export class TablesAndOrdersComponent implements OnInit {

  open_orders:any = Array();
  free_tables:any = Array();
  reserved_tables:any = Array();

  refresh_interval_id:any;
  closingAccounts: Object;
  isSalesTaxRateDifferent: boolean;

  constructor(
    private ordersService: OrdersService,
    private tablesService: TablesService,
    private closingAccountsService: ClosingAccountsService
  ) { }

  ngOnInit() {
    
    this.startInterval();

    this.closingAccountsService.getData()
      .subscribe(data => {
        this.isSalesTaxRateDifferent = false;
        let arrayData = <Array<any>>data;
        arrayData.forEach(el1 => {
          arrayData.forEach(el2 => {
            if(el1.sales_tax_rate != el2.sales_tax_rate)
            this.isSalesTaxRateDifferent = true;
          });
        });

        this.closingAccounts = data;
      });

  }

  ngOnDestroy()
  {
    this.stopInterval();
  }

  startInterval()
  {
    this.refreshData();

    this.refresh_interval_id = setInterval(()=>{
      this.refreshData();
    }, 10000);
  }
  stopInterval()
  {
    if(this.refresh_interval_id)
    {
      clearInterval(this.refresh_interval_id);
    }
  }
  

  refreshData()
  {
    this.ordersService.getOpenOrders()
      .subscribe( data => { this.open_orders = data;} );

    this.tablesService.getFreeTables()
      .subscribe( data => { this.free_tables = data;} );    
  }

}
