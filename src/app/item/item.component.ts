import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/items.service';
import { AuthService } from '../services/auth.service';
import { ConfigService } from '../services/config.service';

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
    item_group: '',
    name: '',
    code: '',
    unit: '',
    price: '',
    is_activated: false,
  };

  is_loading:boolean = false;
  imageToUpload: any;
  url: string | ArrayBuffer;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private itemsService: ItemsService,
    private authService: AuthService,
    private config: ConfigService
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

                let picture = (<any>data).picture;
                if (picture) {
                  this.url = this.config.base_url + "/storage/" + picture;
                }

                this.is_loading = false;

              },
              (error) => {
                alert('System Error occurred. Error: ' + error.message);
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

    value.imageToUpload = this.imageToUpload;
    value.url = this.url;

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
          },
          (error) => {
            alert('System Error occurred. Error: ' + error.message);
          }
        );
  }

  onFileChanged(event) {
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        // this.message = "Only images are supported.";
        return;
    }

    const reader = new FileReader();
    this.imageToUpload = files[0];
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.url = reader.result; 
    }
  }

  onDeleteImageClicked() {
    this.url = null;
  }

}
