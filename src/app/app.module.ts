import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DataTableModule, Button } from 'primeng/primeng';
import {DialogModule} from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';


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
import { OpenOrderComponent } from './open-order/open-order.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './services/settings.service';
import { HomeComponent } from './home/home.component';
import { CollectionReportComponent } from './reports/collection-report/collection-report.component';
import { ReportsService } from './services/reports.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DatesFilterComponent } from './dates-filter/dates-filter.component';
import { SalesByItemReportComponent } from './reports/sales-by-item-report/sales-by-item-report.component';
import { HelperService } from './services/helper.service';
import { SalesByOrderReportComponent } from './reports/sales-by-order-report/sales-by-order-report.component';
import { SummaryComponent } from './reports/summary/summary.component';
import { EditsAfterPrintComponent } from './reports/edits-after-print/edits-after-print.component';


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
    OrderComponent,
    OpenOrderComponent,
    SettingsComponent,
    HomeComponent,
    CollectionReportComponent,
    ChangePasswordComponent,
    DatesFilterComponent,
    SalesByItemReportComponent,
    SalesByOrderReportComponent,
    SummaryComponent,
    EditsAfterPrintComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SlimLoadingBarModule.forRoot(),
    AppRoutingModule,
    PaginationModule.forRoot(),
    DataTableModule,
    DialogModule,
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    ConfigService, 
    AuthService, 
    AuthGuardService, 
    UsersService, TablesService, ItemsService, OrdersService, SettingsService, ReportsService, HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
