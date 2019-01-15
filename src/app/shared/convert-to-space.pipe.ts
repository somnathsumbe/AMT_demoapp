import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {

  transform(pipevalue: string, replacevalue: string): string {
    return pipevalue.replace(replacevalue ,' ');
  }

}
