import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../shared/model/car';

@Pipe({
  name: 'sortByBrand'
})
export class SortByBrandPipe implements PipeTransform {

  transform(cars:Car[]): Car[] {
    if (!cars) return cars;
    return cars.sort((a, b) => {
      var brandA = a.brand.toLowerCase(), brandB = b.brand.toLowerCase()
      if (brandA < brandB)
          return -1 
      if (brandA > brandB)
          return 1
      return 0
    })
  }

}
