import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { TablesService } from '../services/tables.service';

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

  constructor(
    private ordersService: OrdersService,
    private tablesService: TablesService
  ) { }

  ngOnInit() {
    
    this.startInterval();

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
