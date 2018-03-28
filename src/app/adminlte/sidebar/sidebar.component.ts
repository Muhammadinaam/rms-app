import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../services/config.service';
import 'rxjs/add/operator/retryWhen';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user:any;
  menus:any;

  constructor(private authService: AuthService, private http:HttpClient, private config:ConfigService) { }

  ngOnInit() {

    this.authService.getLoggedInUserInfo()
      .subscribe(
        (data)=>{
          this.user = data;
        }
      );

    this.http.get(this.config.base_url + '/api/get-menus')
      //.retryWhen( error => error.delay(2000) )
      .subscribe(
        (data)=>{
          this.menus = data;
        }
      );
  }

}
