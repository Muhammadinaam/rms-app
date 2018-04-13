import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';
import { HelperService } from './helper.service';

@Injectable()
export class ReportsService {

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private h: HelperService
  ) { }

  salesReportByItem(from_date, to_date) {
    let params = { 'from_date': this.h.toSqlFormat(from_date), 'to_date': this.h.toSqlFormat(to_date) };

    return this.http.get(this.config.base_url + '/api/sales-report-by-item', { params: params });
  }

  collectionReport(from_date, to_date) {
    let params = { 'from_date': from_date, 'to_date': to_date };

    this.http.get(this.config.base_url + '/api/collection-report', { params: params })
  }

}
