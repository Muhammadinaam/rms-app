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


  getReportData(from_date, to_date, show_actual, url)
  {
    let params = { 
      'from_date': this.h.toSqlFormat(from_date), 
      'to_date': this.h.toSqlFormat(to_date),  
      's_a': show_actual,
    };

    return this.http.get(this.config.base_url + '/api/' + url, { params: params });
  }

  topAndLeastItemsReport(from_date, to_date, show_actual) {
    return this.getReportData(from_date, to_date, show_actual, 'top-least-selling-items-report');
  }

  editsAfterPrintReport(from_date, to_date, show_actual) {
    return this.getReportData(from_date, to_date, show_actual, 'edits-after-print-report');
  }

  salesReportByItem(from_date, to_date, show_actual) {
    return this.getReportData(from_date, to_date, show_actual, 'sales-report-by-item');
  }

  salesReportByOrder(from_date, to_date, show_actual) {
    return this.getReportData(from_date, to_date, show_actual, 'sales-report-by-order');
  }

  cancelledOrdersReport(from_date, to_date) {
    let params = {
      'from_date': this.h.toSqlFormat(from_date),
      'to_date': this.h.toSqlFormat(to_date),
      //'s_a': show_actual,
    };

    return this.http.get(this.config.base_url + '/api/cancelled-orders-report', { params: params });
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
