import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './services/config.service';

@Injectable()
export class ClosingAccountsService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getData()
  {
    return this.http.get(this.config.base_url + '/api/closing-accounts');
  }

  getById(id)
  {
    return this.http.get(this.config.base_url + '/api/closing-accounts/' + id + '/edit');
  }

  delete(id)
  {
    return this.http.delete(this.config.base_url + '/api/closing-accounts/' + id);
  }

  saveUserData(data, id?)
  {
    let fd = new FormData();

    for (let key in data) {
        let value = data[key];
        // Use `key` and `value`

        if(key == 'additional_information_fields') {
          fd.append( key, JSON.stringify(value) );
        } else {
          fd.append( key, value );
        }
    }

    if(id == null)  // new table
      return this.http.post(this.config.base_url + '/api/closing-accounts', fd);
    else
    {
      fd.append('_method', 'PUT');
      return this.http.post(this.config.base_url + '/api/closing-accounts/' + id, fd);
    }
  }

}
