import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PriceGroupService } from '../price-group.service';

@Component({
  selector: 'app-price-groups',
  templateUrl: './price-groups.component.html',
  styleUrls: ['./price-groups.component.css']
})
export class PriceGroupsComponent implements OnInit {

  priceGroups;
  can_add_new=false;
  can_edit=false;
  can_delete=false;

  constructor(private authService: AuthService,
    private priceGroupService: PriceGroupService) { }

  ngOnInit() {
    this.priceGroupService.getPriceGroups()
      .subscribe( data => { this.priceGroups = data; } );

    this.authService.hasPermission('add-new-price-group')
      .subscribe( data => { this.can_add_new = data['has_permission']; } );

    this.authService.hasPermission('edit-price-group')
      .subscribe( data => { this.can_edit = data['has_permission']; } );

    this.authService.hasPermission('delete-price-group')
      .subscribe( data => { this.can_delete = data['has_permission']; } );
  }

  delete(index) {
    if (confirm("Are you sure?")) {
      this.priceGroupService.delete(this.priceGroups[index]['id'])
        .subscribe( data => {
          alert(data['message'])
          if(data['success']) {
            this.priceGroups.splice(index, 1)
          }
        } );
    }
  }

}
