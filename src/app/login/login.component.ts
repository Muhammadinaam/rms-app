import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config.service';
import 'rxjs/add/operator/finally';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  http_error_message = "";
  is_loading = false;

  username:string = "abc@abc.com";
  password:string = "123456";

  constructor(private http: HttpClient, 
              private config: ConfigService, 
              private authService: AuthService,
              private router: Router
            ) 
  { }

  ngOnInit() {
  }

  onSubmit(form_data)
  {
    this.http_error_message = "";
    this.is_loading = true;

    this.authService.login(form_data.username, form_data.password)
      .finally( ()=>{ this.is_loading = false; } )
      .subscribe(
        (data)=>{
          if(data['access_token'] != '')
          {
            localStorage.setItem("access_token", data['access_token']);
            this.router.navigate(['']);
          }
        },
        (err)=>{
          this.http_error_message = err.message;

          console.log(err);
          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            this.http_error_message = 'An error occurred:', err.error.message;
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            this.http_error_message = `Backend returned code ${err.status}, body was: ${err.error.message}`;
          }

        }
      );
  }

}
