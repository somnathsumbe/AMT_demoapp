import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], listFilter: string): any[] {
    if (!items) return [];
    if (!listFilter) return items;
    return items.filter(it => {
      return it.productName.toLowerCase().includes(listFilter);
    });
  }
}
