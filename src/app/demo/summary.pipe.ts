import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit: number): any {

if(limit!==undefined){
  limit=(limit) ? limit : 50;
  return value.substr(0,limit)+'....';
}
else{
  return value.substr(0,50)+'....';
}
  }

}
