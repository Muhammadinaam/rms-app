import { Injectable } from '@angular/core';

import * as moment from 'moment';

@Injectable()
export class HelperService {

  constructor() { }

  toSqlFormat(date: any, format = 'YYYY-MM-DD HH:mm:ss')
  {
    return moment(date).format(format);
  }

}
