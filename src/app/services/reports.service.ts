import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

import { HelperService } from './helper.service';

@Injectable()
export class ReportsService {

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private h: HelperService
  ) { }


  editsAfterPrintReport(from_date, to_date, show_actual) {
    let params = { 
      'from_date': this.h.toSqlFormat(from_date), 
      'to_date': this.h.toSqlFormat(to_date),  
      's_a': show_actual,
    };

    return this.http.get(this.config.base_url + '/api/edits-after-print-report', { params: params });
  }

  salesReportByItem(from_date, to_date, show_actual) {
    let params = { 
      'from_date': this.h.toSqlFormat(from_date), 
      'to_date': this.h.toSqlFormat(to_date),  
      's_a': show_actual,
    };

    return this.http.get(this.config.base_url + '/api/sales-report-by-item', { params: params });
  }

  salesReportByOrder(from_date, to_date, show_actual) {
    let params = { 
      'from_date': this.h.toSqlFormat(from_date), 
      'to_date': this.h.toSqlFormat(to_date),  
      's_a': show_actual,
    };

    return this.http.get(this.config.base_url + '/api/sales-report-by-order', { params: params });
  }

  collectionReport(from_date, to_date, show_actual) {
    let params = { 
      'from_date': this.h.toSqlFormat(from_date), 
      'to_date': this.h.toSqlFormat(to_date),  
      's_a': show_actual,
    };

    this.http.get(this.config.base_url + '/api/collection-report', { params: params })
  }

}
