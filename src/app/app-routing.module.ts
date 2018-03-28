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


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    canActivate: [AuthGuardService],
    children: [
      
      { path: '', component: TablesAndOrdersComponent },
      { path: 'add-order', component: OrderComponent },
      
      
      { path: 'users', component: UsersComponent},
      { path: 'user', component: UserFormComponent},
      { path: 'user/:id', component: UserFormComponent},

      { path: 'tables', component: TablesComponent},
      { path: 'table', component: TableComponent},
      { path: 'table/:id', component: TableComponent},

      { path: 'items', component: ItemsComponent},
      { path: 'item', component: ItemComponent},
      { path: 'item/:id', component: ItemComponent},
    ]
  }

  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}