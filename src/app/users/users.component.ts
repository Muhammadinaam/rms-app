import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  users_data:any;

  can_add_new=false;
  can_edit=false;

  constructor(private route: ActivatedRoute, private router: Router, 
    private http: HttpClient, 
    private config: ConfigService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.users_data = Array();
    this.users_data['data'] = Array();

    this.getUsers();

    this.authService.hasPermission('add-new-user')
      .subscribe( data => { this.can_add_new = data['has_permission']; } );

      this.authService.hasPermission('edit-user')
      .subscribe( data => { this.can_edit = data['has_permission']; } );
  }

  getUsers(page?:any)
  {
    let page_query = page ? '?page=' + page : '';
    this.http.get(this.config.base_url + '/api' + this.router.url + page_query)
      .subscribe(
        (data)=>{
          this.users_data = data;
        }
      );
  }

  loadLazy(event: LazyLoadEvent) {
      //in a real application, make a remote request to load data using state metadata from event
      //event.first = First row offset
      //event.rows = Number of rows per page
      //event.sortField = Field name to sort with
      //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
      //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
      
      let page_num = Math.trunc( event.first / 10 ) + 1;
      
      this.getUsers(page_num);

      
  }

  

}
