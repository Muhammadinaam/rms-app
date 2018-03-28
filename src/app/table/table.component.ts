import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TablesService } from '../services/tables.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  form_type="New";
  table:any = {
    id: null,
    name: '',
    portion: '',
  };

  portions:any=Array();

  is_loading:boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private tablesService: TablesService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data)=>{
        if( data.id != null )
        {
          this.form_type="Edit";

          this.is_loading = true;
          this.tablesService.getTableById(data.id)
            .subscribe(
              (data)=>{
                this.table = data;
                this.is_loading = false;

              }
            );
        }
        
      }
    );


    this.tablesService.getPortions()
      .subscribe( data => { this.portions = data; } )
  }

  selectPortion(portion)
  {
    this.table.portion = portion;
  }

  onSubmit(value, form_type)
  {
    this.is_loading = true;

    let id = this.form_type == "New" ? null : this.table.id;

    this.tablesService.saveUserData(value, id)
        .finally(
          ()=>{ this.is_loading = false; }
        )
        .subscribe(
          (data)=>{
            this.is_loading = false;

            alert(data['message']);
            if( data['success'] == true )
            {
              this.router.navigate(['/tables']);
            }
          }
        );
  }

}
