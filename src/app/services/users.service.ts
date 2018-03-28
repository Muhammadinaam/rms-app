import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getUserById(id:any)
  {
    return this.http.get(this.config.base_url + '/api/users/' + id + '/edit');
  }

  getAllPermissions()
  {
    return this.http.get(this.config.base_url + '/api/get-permissions');
  }

  saveUserData(data, id?)
  {
    let fd = new FormData();

    for (let key in data) {
        let value = data[key];
        // Use `key` and `value`
        fd.append( key, value );
    }

    if(id == null)  // new user
      return this.http.post(this.config.base_url + '/api/users', fd);
    else
    {
      fd.append('_method', 'PUT');
      return this.http.post(this.config.base_url + '/api/users/' + id, fd);
    }
  }

}
