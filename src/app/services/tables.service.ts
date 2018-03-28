import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class TablesService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getTables()
  {
    return this.http.get(this.config.base_url + '/api/tables');
  }

  getTableById(id)
  {
    return this.http.get(this.config.base_url + '/api/tables/' + id + '/edit');
  }

  getPortions()
  {
    return this.http.get(this.config.base_url + '/api/get-portions');
  }

  getFreeTables() {
    return this.http.get(this.config.base_url + '/api/free_tables');
  }

  saveUserData(data, id?)
  {
    let fd = new FormData();

    for (let key in data) {
        let value = data[key];
        // Use `key` and `value`
        fd.append( key, value );
    }

    if(id == null)  // new table
      return this.http.post(this.config.base_url + '/api/tables', fd);
    else
    {
      fd.append('_method', 'PUT');
      return this.http.post(this.config.base_url + '/api/tables/' + id, fd);
    }
  }

}
