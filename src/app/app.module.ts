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
import { NgPipesModule } from 'ngx-pipes';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'primeng/chart';

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
import { CancelledOrdersReportComponent } from './reports/cancelled-orders-report/cancelled-orders-report.component';
import { InvoicesPrintingComponent } from './invoices-printing/invoices-printing.component';
import { TopLeastItemsReportComponent } from './reports/top-least-items-report/top-least-items-report.component';
import { XReportComponent } from './reports/x-report/x-report.component';
import { BoxComponent } from './adminlte-components/box/box.component';
import { RatingReportComponent } from './reports/rating-report/rating-report.component';
import { RatingAddEditComponent } from './reports/rating-add-edit/rating-add-edit.component';
import { ItemsListDialogComponent } from './reports/items-list-dialog/items-list-dialog.component';
import { ItemsSelectorComponent } from './items-selector/items-selector.component';
import { ToastrModule } from 'ngx-toastr';
import { ClosingAccountsComponent } from './closing-accounts/closing-accounts.component';
import { ClosingAccountComponent } from './closing-account/closing-account.component';
import { ClosingAccountsService } from './closing-accounts.service';
import { PriceGroupsComponent } from './price-groups/price-groups.component';
import { PriceGroupComponent } from './price-group/price-group.component';
import { PriceGroupService } from './price-group.service';


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
    CancelledOrdersReportComponent,
    InvoicesPrintingComponent,
    TopLeastItemsReportComponent,
    XReportComponent,
    BoxComponent,
    RatingReportComponent,
    RatingAddEditComponent,
    ItemsListDialogComponent,
    ItemsSelectorComponent,
    ClosingAccountsComponent,
    ClosingAccountComponent,
    PriceGroupsComponent,
    PriceGroupComponent,
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
    CalendarModule,
    NgPipesModule,
    NgxChartsModule,
    ChartModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    ConfigService, 
    AuthService, 
    AuthGuardService, 
    UsersService, 
    TablesService, 
    ItemsService, 
    OrdersService, 
    SettingsService, 
    ReportsService, 
    HelperService,
    ClosingAccountsService,
    PriceGroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
