import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../types/hero';

@Pipe({
  name: 'filterHeroes',
})
export class FilterHeroesPipe implements PipeTransform {
  transform(array: Hero[], filter?: string): any {
    let returnArray: Hero[];

    returnArray = array;
    filter = filter?.toUpperCase();
    if (!array || !filter) return array;

    if (!array) {
      return array;
    } else {
      returnArray = returnArray.filter(({ title }) =>
        title.toUpperCase().includes(typeof filter === 'string' ? filter : '')
      );
    }
    return returnArray;
  }
}
