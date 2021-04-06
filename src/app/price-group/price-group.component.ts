import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { AuthService } from '../services/auth.service';
import { PriceGroupService } from '../price-group.service';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-price-group',
  templateUrl: './price-group.component.html',
  styleUrls: ['./price-group.component.css']
})
export class PriceGroupComponent implements OnInit {

  form_type="New";
  priceGroup:any = {
    id: null,
    name: '',
    multiplying_factor: '',
    items: []
  };

  items:any = [];

  is_loading:boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private priceGroupService: PriceGroupService,
    private authService: AuthService,
    private config: ConfigService,
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data)=>{
        if( data.id != null )
        {
          this.form_type="Edit";

          this.is_loading = true;
          this.priceGroupService.getById(data.id)
            .subscribe(
              (data)=>{
                this.priceGroup = data;
                this.priceGroup.items = data['price_group_items'];

                this.is_loading = false;

              },
              (error) => {
                alert('System Error occurred. Error: ' + error.message);
              }
            );
        }
        
      }
    );

    this.itemsService.getItems(0, false)
      .subscribe(data => {
        this.items = data;
      })


  }

  onSubmit(value, form_type)
  {
    this.is_loading = true;

    let id = this.form_type == "New" ? null : this.priceGroup.id;

    let data = JSON.parse(JSON.stringify(this.priceGroup));
    data.items = JSON.stringify(data.items);

    this.priceGroupService.saveData(data, id)
        .finally(
          ()=>{ this.is_loading = false; }
        )
        .subscribe(
          (data)=>{
            this.is_loading = false;

            alert(data['message']);
            if( data['success'] == true )
            {
              this.router.navigate(['/price-groups']);
            }
          },
          (error) => {
            alert('System Error occurred. Error: ' + error.message);
          }
        );
  }

  addItem() {
    this.priceGroup.items.push({
      item_id: this.items && this.items.length > 0 ? this.items[0].id : '',
      price: 0
    })
  }

  removeItem(index) {
    this.priceGroup.items.splice(index, 1);
  }

}
