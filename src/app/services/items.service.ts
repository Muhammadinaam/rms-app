import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getItems(show_inactive_also = 0, grouped = false)
  {
    let url = '/api/items';
    url += show_inactive_also == 1 ? '?show_inactive_also=1' : '?show_inactive_also=0';
    url += grouped ? '&grouped=1' : '&grouped=0';
    return this.http.get(this.config.base_url + url);
  }

  getItemById(id)
  {
    return this.http.get(this.config.base_url + '/api/items/' + id + '/edit');
  }

  saveData(data, id?)
  {
    let fd = new FormData();

    for (let key in data) {
        let value = data[key];
        // Use `key` and `value`
        fd.append( key, value );
    }

    if(id == null)  // new table
      return this.http.post(this.config.base_url + '/api/items', fd);
    else
    {
      fd.append('_method', 'PUT');
      return this.http.post(this.config.base_url + '/api/items/' + id, fd);
    }
  }

}
