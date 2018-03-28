import { Injectable } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private config: ConfigService, private http: HttpClient, private router: Router) { }

  login( username:string, password:string )
  {
    
    let fd = new FormData();

    fd.append('username', username);
    fd.append('password', password);

    for (let key in this.config.auth_data) {
        let value = this.config.auth_data[key];
        // Use `key` and `value`
        fd.append( key, value );
        
        
    }

    return this.http.post(this.config.base_url + '/oauth/token', fd)
      
  }

  logout()
  {
    localStorage.setItem('access_token', '');
    this.router.navigate(['login']);
  }

  isLoggedIn()
  {
    let is_logged_in = localStorage.getItem("access_token") === null || localStorage.getItem("access_token") == "" ? false : true;

    return is_logged_in;
  }

  getLoggedInUserInfo()
  {
    const httpOptions = {
      headers: new HttpHeaders(
        { 
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        }
      )
    };

    return this.http.post(this.config.base_url + '/api/get-logged-in-user-info', null, httpOptions);
  }

  getPermissions(user_id?)
  {
    let permissions_url = '/api/get-permissions';
    permissions_url = user_id ? permissions_url + '?user_id=' + user_id : permissions_url;
    
    return this.http.get(this.config.base_url + permissions_url);
  }

  hasPermission(permission, user_id?)
  {
    let permissions_url = '/api/has-permission?permission=' + permission;
    permissions_url = user_id ? permissions_url + '&user_id=' + user_id : permissions_url;
    
    return this.http.get(this.config.base_url + permissions_url);
  }

}
