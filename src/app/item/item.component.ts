import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  form_type="New";
  item:any = {
    id: null,
    category: '',
    name: '',
    code: '',
    unit: '',
    price: '',
  };

  is_loading:boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private itemsService: ItemsService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data)=>{
        if( data.id != null )
        {
          this.form_type="Edit";

          this.is_loading = true;
          this.itemsService.getItemById(data.id)
            .subscribe(
              (data)=>{
                this.item = data;
                this.is_loading = false;

              }
            );
        }
        
      }
    );


  }

  onSubmit(value, form_type)
  {
    this.is_loading = true;

    let id = this.form_type == "New" ? null : this.item.id;

    this.itemsService.saveData(value, id)
        .finally(
          ()=>{ this.is_loading = false; }
        )
        .subscribe(
          (data)=>{
            this.is_loading = false;

            alert(data['message']);
            if( data['success'] == true )
            {
              this.router.navigate(['/items']);
            }
          }
        );
  }

}
