import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/scan';
import { ConfigService } from '../services/config.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private configService:ConfigService, private authService:AuthService, private router:Router)
  {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
    console.log("intercepted request ... ");

    // Clone the request to add the new header.

    let headers = { "Access-Control-Allow-Origin": this.configService.base_url, };

    if(this.authService.isLoggedIn())
    {
      headers['Accept'] = 'application/json';
      headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    }

    const authReq = req.clone({ 
      setHeaders: headers
    });
    

    console.log("Sending request with new header now ...");
    

    //send the newly created request
    return next.handle(authReq)
            .retryWhen((errors) => {

              let attempts = 0;

                return errors
                    .mergeMap(
                      (error) => {
                        if( error.status == 401 )
                        {
                          this.authService.logout();
                          this.router.navigate(['login']);
                          return Observable.throw(error);
                        }
                        else if( error.status == 422 )
                        {
                          
                          let error_message = '';
                          for(let key of Object.keys(error.error.errors))
                          {
                            //error.error.errors[key]
                            for( let err_msg of error.error.errors[key] )
                            {
                              error_message += err_msg + '. '; 
                            }
                          }
                          alert(error_message);

                          
                          return Observable.throw(error);
                        }
                        // else if( error.status < 500 )
                        // {
                        //   alert(error.message);
                        //   return Observable.throw(error);
                        // }
                        else
                        {

                          console.log(error);
                          alert(error.message);
                          return Observable.throw(error);


                          /* Following is retry code
                          attempts++
                          if(attempts < 5)
                          {
                            return Observable.of(error)
                          }
                          else
                          {
                            console.log(error);
                            alert(error.message);
                            return Observable.throw(error);
                          }
                          */


                        }
                      } //(error.status === 429) ? Observable.throw(error) : Observable.of(error)
                    )
                    .delay(2000)
                    
            
            })
            
            
            
              
              



            


    // return next.handle(authReq)
    //   .retry(10)
    //   .do(
    //     (event: HttpEvent<any>) => {
    //       if (event instanceof HttpResponse) {
    //         // do stuff with response if you want
    //       }
    //     }, (err: any) => {
    //       if (err instanceof HttpErrorResponse) {
    //         if (err.status === 401) {
    //           // redirect to the login route
    //           this.authService.logout();
    //           this.router.navigate(['login']);
    //           // or show a modal
    //         }
    //         else
    //         {
    //           alert(err.message);
    //         }
    //       }
    //     }
    //   );
    
  }

  

}
