import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DataTableModule, Button } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';


import { AppComponent } from './app.component';
import { HeaderComponent } from './adminlte/header/header.component';
import { SidebarComponent } from './adminlte/sidebar/sidebar.component';
import { FooterComponent } from './adminlte/footer/footer.component';
import { ContentComponent } from './adminlte/content/content.component';
import { LoginComponent } from './login/login.component';
import { ConfigService } from './services/config.service';
import { LoaderInterceptorService } from './interceptors/loader-interceptor.service';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './/app-routing.module';
import { TablesAndOrdersComponent } from './tables-and-orders/tables-and-orders.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersService } from './services/users.service';
import { KeysPipe } from './keys.pipe';
import { TablesComponent } from './tables/tables.component';
import { TableComponent } from './table/table.component';
import { TablesService } from './services/tables.service';
import { ItemsService } from './services/items.service';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import { OrdersService } from './services/orders.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    TablesAndOrdersComponent,
    UsersComponent,
    UserFormComponent,
    KeysPipe,
    TablesComponent,
    TableComponent,
    ItemsComponent,
    ItemComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SlimLoadingBarModule.forRoot(),
    AppRoutingModule,
    PaginationModule.forRoot(),
    DataTableModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    ConfigService, 
    AuthService, 
    AuthGuardService, 
    UsersService, TablesService, ItemsService, OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
