import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './services/config.service';

@Injectable()
export class PriceGroupService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getPriceGroups()
  {
    let url = '/api/price-groups';
    return this.http.get(this.config.base_url + url);
  }

  getItemById(id)
  {
    return this.http.get(this.config.base_url + '/api/price-groups/' + id + '/edit');
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
      return this.http.post(this.config.base_url + '/api/price-groups', fd);
    else
    {
      fd.append('_method', 'PUT');
      return this.http.post(this.config.base_url + '/api/price-groups/' + id, fd);
    }
  }

}
