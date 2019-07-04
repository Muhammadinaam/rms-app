import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { config } from '../../assets/config';

@Injectable()
export class ConfigService {

   base_url = "http://localhost/rms/public";
  //base_url = "http://192.168.100.7/rms/public";

  auth_data = {
    grant_type: 'password',
    client_id: '2',
    client_secret: 'dRcXHre5hNEiIjGJXqriwykZym5Eh0NRF7OjqPCk',
  };

  private http: HttpClient;

  constructor(
    private handler: HttpBackend
  ) {

    this.http = new HttpClient(handler);
    this.Init();

  }

  Init()
  {
    this.http.get('assets/base_url.txt')
      .subscribe((data)=>{
          this.base_url = data['base_url'];
        },
        ()=>{ alert('Unable to base_url from base_url.txt file'); }
      );

    this.auth_data = config.auth_data;
  }

}
