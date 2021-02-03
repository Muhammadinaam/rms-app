import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ClosingAccountsService } from '../closing-accounts.service';

@Component({
  selector: 'app-closing-accounts',
  templateUrl: './closing-accounts.component.html',
  styleUrls: ['./closing-accounts.component.css']
})
export class ClosingAccountsComponent implements OnInit {

  data;
  can_add_new=false;
  can_edit=false;
  can_delete=false;

  constructor(private authService: AuthService,
    private closingAccountsService: ClosingAccountsService
  ) { }

  ngOnInit() {

    this.refreshData();

    this.authService.hasPermission('add-closing-account')
      .subscribe( data => { this.can_add_new = data['has_permission']; } );

    this.authService.hasPermission('edit-closing-account')
    .subscribe( data => { this.can_edit = data['has_permission']; } );

    this.authService.hasPermission('delete-closing-account')
    .subscribe( data => { this.can_delete = data['has_permission']; } );

  }

  private refreshData() {
    this.closingAccountsService.getData()
      .subscribe(data => { this.data = data; });
  }

  delete(index) {
    let result = confirm("Are you sure you want to delete");

    if(result) {
      this.closingAccountsService.delete(this.data[index].id)
      .subscribe(data => {
        alert(data['message']);
        this.refreshData();
      });
    }
  }

}
