import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'Rxjs';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getOrderEditById(id)
  {
    return this.http.get(this.config.base_url + '/api/get_order_edit/' + id);
  }

  getOrderById(id)
  {
    return this.http.get(this.config.base_url + '/api/orders/' + id + '/edit');
  }

  getOrderTypes()
  {
    return this.http.get(this.config.base_url + '/api/order_types');
  }

  

  saveOrder(order, deleted_details, id?, other_info?)
  {
    let fd = new FormData();

    fd.append('order', JSON.stringify(order));
    fd.append('deleted_details', JSON.stringify(deleted_details));
    fd.append('other_info', JSON.stringify(other_info));


    if (id == null)  // new order
    {
      return this.http.post(this.config.base_url + '/api/orders', fd);
    }
    else {
      fd.append('_method', 'PUT');
      return this.http.post(this.config.base_url + '/api/orders/' + id, fd);
    }
  }

  saveDiscount(order, other_info)
  {
    let fd = new FormData();

    fd.append('order', JSON.stringify(order));
    fd.append('other_info', JSON.stringify(other_info));

    return this.http.post(this.config.base_url + '/api/save-order-discount', fd);
    
  }

  getOpenOrders()
  {
    return this.http.get(this.config.base_url + '/api/open-orders');
  }

  changeOrderStatus(order_id, status, user_id, password, remarks)
  {
    let data = new FormData();
    data.append('order_id', order_id);
    data.append('status', status);
    data.append('user_id', user_id);
    data.append('password', password);
    data.append('remarks', remarks);

    return this.http.post(this.config.base_url + '/api/change-order-status', data);
  }

  closeOrder(order_id, received_through, ent_remarks)
  {
    let data = new FormData();
    data.append('order_id', order_id);
    data.append('received_through', received_through);
    data.append('ent_remarks', ent_remarks);

    return this.http.post(this.config.base_url + '/api/close-order', data);
  }

  printForCustomer(order_id)
  {
    return this.http.post(this.config.base_url + '/api/print-for-customer/' + order_id, null);
  }

  reprintForKitchens(order_id)
  {
    return this.http.post(this.config.base_url + '/api/reprint-for-kitchens/' + order_id, null);
  }

}
