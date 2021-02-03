import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ClosingAccountsService } from '../closing-accounts.service';

@Component({
  selector: 'app-closing-account',
  templateUrl: './closing-account.component.html',
  styleUrls: ['./closing-account.component.css']
})
export class ClosingAccountComponent implements OnInit {

  form_type="New";
  closingAccount:any = {
    id: null,
    order: '',
    name: '',
    sales_tax_rate: 0,
    show_amount_received_input: 1,
    additional_information_fields: []
  };

  is_loading:boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private closingAccountsService: ClosingAccountsService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data)=>{
        if( data.id != null )
        {
          this.form_type="Edit";

          this.is_loading = true;
          this.closingAccountsService.getById(data.id)
            .subscribe(
              (data)=>{
                let closingAccount = data;
                closingAccount['additional_information_fields'] = JSON.parse(data['additional_information_fields']);
                this.closingAccount = closingAccount;
                this.is_loading = false;

              }
            );
        }
        
      }
    );

  }

  onSubmit(value, form_type)
  {
    for(let i = 0; i < this.closingAccount.additional_information_fields.length; i++) {
      if(this.closingAccount.additional_information_fields[i].name == '')
      {
        alert("Please provied additional field name");
        return;
      }
    }
    
    this.is_loading = true;

    let id = this.form_type == "New" ? null : this.closingAccount.id;

    this.closingAccountsService.saveUserData(this.closingAccount, id)
        .finally(
          ()=>{ this.is_loading = false; }
        )
        .subscribe(
          (data)=>{
            this.is_loading = false;

            alert(data['message']);
            if( data['success'] == true )
            {
              this.router.navigate(['/closing-accounts']);
            }
          }
        );
  }

  addAdditionalInformationField() {
    this.closingAccount.additional_information_fields.push({
      name: '',
      required: 1
    })
  }

  removeAdditionalInformationField(index) {
    this.closingAccount.additional_information_fields.splice(index, 1);
  }

}
