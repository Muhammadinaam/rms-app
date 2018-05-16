import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys2',
  pure: false,
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Object.keys(value)//.map(key => value[key]);
  }

}
