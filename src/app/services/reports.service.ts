import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReportsService {

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }

  salesReport(from_date, to_date) {
    let params = { 'from_date': from_date, 'to_date': to_date };

    this.http.get(this.config.base_url + '/api/sales-report', { params: params })
  }

  collectionReport(from_date, to_date) {
    let params = { 'from_date': from_date, 'to_date': to_date };

    this.http.get(this.config.base_url + '/api/collection-report', { params: params })
  }

}
