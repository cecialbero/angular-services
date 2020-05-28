import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: any, unitValue): any {
    // if no value, return empty string. To avoid NaN
    if (!value) {
      return '';
    }

    switch (unitValue) {
      case 'km':
        return value * 1.60934;
      case 'mt':
        return value * 16.0934;
      default:
        return value;
    }
  }

}
