import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../assets/config';

@Injectable()
export class ConfigService {

  base_url = "http://localhost/rms/public";

  auth_data = {
    grant_type: 'password',
    client_id: '2',
    client_secret: 'dRcXHre5hNEiIjGJXqriwykZym5Eh0NRF7OjqPCk',
  };

  constructor(
    private http: HttpClient
  ) {
  
    this.base_url = config.base_url;
    this.auth_data = config.auth_data;

  }

}
