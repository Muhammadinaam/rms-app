import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'Rxjs';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getOrderById(id)
  {
    alert('Function not implemented in orders service' );
    return Observable.of('abc');
  }

  getOrderTypes()
  {
    return this.http.get(this.config.base_url + '/api/order_types');
  }

  

  saveOrder(order, deleted_details, id?)
  {
    let fd = new FormData();

    fd.append('order', JSON.stringify(order));
    fd.append('deleted_details', JSON.stringify(deleted_details));



    if (id == null)  // new order
    {
      return this.http.post(this.config.base_url + '/api/orders', fd);
    }
    else {
      fd.append('_method', 'PUT');
      return this.http.post(this.config.base_url + '/api/orders/' + id, fd);
    }
  }

}
