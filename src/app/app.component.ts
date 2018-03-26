import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
declare var $:any;




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  is_logged_in = false;

  constructor(private _loadingBar: SlimLoadingBarService, private authService: AuthService, private router: Router) { 

    this.router.events.subscribe(
      (event)=>{
        this.is_logged_in = this.authService.isLoggedIn();
        $(document).ready(function(){
          $(window).resize();
        })    
      }
    );

  }

  ngOnInit() {
    
    

  }

}
