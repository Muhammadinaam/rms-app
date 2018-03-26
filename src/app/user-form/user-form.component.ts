import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form_type="New";
  user:any = {
    id: null,
    name: '',
    email: '',
    password: '',
    is_admin: false,
    is_activated: true,
  };

  permissions:any = Array();

  is_loading:boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private usersService: UsersService,
    private authService: AuthService,
  ) { }

  ngOnInit() {

    
    this.route.params.subscribe(
      (data)=>{
        if( data.id != null )
        {
          this.form_type="Edit";

          this.is_loading = true;
          this.usersService.getUserById(data.id)
            .subscribe(
              (data)=>{
                this.user = data;
                this.user.password = '';

                this.authService.getPermissions(data['id'])
                  .subscribe(
                    (permissions_data)=>{
                      this.permissions = permissions_data;
                      
                      this.is_loading = false;
                    }
                  )

              }
            );
        }
        else
        {
          this.is_loading = true;
          this.authService.getPermissions()
            .subscribe(
              (permissions_data)=>{
                this.permissions = permissions_data;
                this.is_loading = false;
              }
            )
        }
      }
    );

  }

  onSubmit(value, form_type)
  {
    this.is_loading = true;

    let id = this.form_type == "New" ? null : this.user.id;

    this.usersService.saveUserData(value, id)
        .finally(
          ()=>{ this.is_loading = false; }
        )
        .subscribe(
          (data)=>{
            this.is_loading = false;

            alert(data['message']);
            if( data['success'] == true )
            {
              this.router.navigate(['/users']);
            }
          }
        );
  }

}
