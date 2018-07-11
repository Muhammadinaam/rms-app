import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-invoices-printing',
  templateUrl: './invoices-printing.component.html',
  styleUrls: ['./invoices-printing.component.css']
})
export class InvoicesPrintingComponent implements OnInit {

  invoice_id_from;
  invoice_id_to;

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  ngOnInit() {
  }

  printBtnClicked()
  {

    if(this.invoice_id_from == "" || this.invoice_id_to == "")
    {
      alert("Please profide 'Invoice ID From' and 'Invoice ID To'");
      return;
    }

    let r = confirm("Are you sure?")

    if (r != true) {
      return;
    }

    let data = new FormData();
    data.append('invoice_id_from', this.invoice_id_from);
    data.append('invoice_id_to', this.invoice_id_to);

    this.http.post(this.config.base_url + '/api/invoices-printing', data)
      .subscribe( data =>{
        alert(data['message']);
      });

  }

}
