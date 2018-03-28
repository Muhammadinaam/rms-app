import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ItemsService } from '../services/items.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items;
  can_add_new=false;
  can_edit=false;

  constructor(private authService: AuthService,
    private itemsService: ItemsService
  ) { }

  ngOnInit() {

    this.itemsService.getItems()
      .subscribe( data => { this.items = data; } );

    this.authService.hasPermission('add-new-item')
      .subscribe( data => { this.can_add_new = data['has_permission']; } );

    this.authService.hasPermission('edit-item')
      .subscribe( data => { this.can_edit = data['has_permission']; } );

  }

}
