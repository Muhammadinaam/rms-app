import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ItemsService } from '../services/items.service';
import { ConfigService } from '../services/config.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items;
  can_add_new=false;
  can_edit=false;
  baseImagePath: string;

  constructor(private authService: AuthService,
    private itemsService: ItemsService,
    private config: ConfigService
  ) { 
    this.baseImagePath = this.config.base_url + "/storage/";
  }

  ngOnInit() {

    this.itemsService.getItems(1)
      .subscribe( data => { this.items = data; } );

    this.authService.hasPermission('add-new-item')
      .subscribe( data => { this.can_add_new = data['has_permission']; } );

    this.authService.hasPermission('edit-item')
      .subscribe( data => { this.can_edit = data['has_permission']; } );

  }

}
