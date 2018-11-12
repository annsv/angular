import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'circus'
})
export class CircusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   
    value = value.toLowerCase();
    return value.split('')
      .map( (element, index) => {
          if (index%2) {
            return element.toUpperCase();
          } else { return element; }
      })
      .join('');    
  }

}
