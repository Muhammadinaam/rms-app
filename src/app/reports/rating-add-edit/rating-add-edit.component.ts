import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-rating-add-edit',
  templateUrl: './rating-add-edit.component.html',
  styleUrls: ['./rating-add-edit.component.css']
})
export class RatingAddEditComponent implements OnInit {

  constructor(private http: HttpClient, private config: ConfigService) { }

  order_id='';
  food_rating='';
  service_rating='';
  ambiance_rating='';

  ngOnInit() {
  }

  saveRating()
  {
    
    let fd = new FormData();

    fd.append('order_id', this.order_id);
    fd.append('food_rating', this.food_rating);
    fd.append('service_rating', this.service_rating);
    fd.append('ambiance_rating', this.ambiance_rating);

    this.http.post(this.config.base_url + '/api/save-rating', fd)
      .subscribe(data=>{
        alert(data['message']);
      });
  }

}
