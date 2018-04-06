import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TablesAndOrdersComponent } from './tables-and-orders/tables-and-orders.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TablesComponent } from './tables/tables.component';
import { TableComponent } from './table/table.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { SalesReportComponent } from './reports/sales-report/sales-report.component';
import { CollectionReportComponent } from './reports/collection-report/collection-report.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [

      { path: 'change-password', component: ChangePasswordComponent},
      
      { path: 'table-and-orders', component: TablesAndOrdersComponent },
      { path: 'add-order', component: OrderComponent },
      { path: 'edit-order/:id', component: OrderComponent },
      
      { path: 'settings', component: SettingsComponent },
      
      { path: 'users', component: UsersComponent},
      { path: 'user', component: UserFormComponent},
      { path: 'user/:id', component: UserFormComponent},

      { path: 'tables', component: TablesComponent},
      { path: 'table', component: TableComponent},
      { path: 'table/:id', component: TableComponent},

      { path: 'items', component: ItemsComponent},
      { path: 'item', component: ItemComponent},
      { path: 'item/:id', component: ItemComponent},

      { path: 'sales-report', component: SalesReportComponent },
      { path: 'collection-report', component: CollectionReportComponent },

    ]
  }

  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}