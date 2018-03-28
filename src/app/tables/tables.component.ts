import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TablesService } from '../services/tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables;
  can_add_new=false;
  can_edit=false;

  constructor(private authService: AuthService,
    private tablesService: TablesService
  ) { }

  ngOnInit() {

    this.tablesService.getTables()
      .subscribe( data => { this.tables = data; } );

    this.authService.hasPermission('add-new-table')
      .subscribe( data => { this.can_add_new = data['has_permission']; } );

    this.authService.hasPermission('edit-table')
      .subscribe( data => { this.can_edit = data['has_permission']; } );

  }

}
