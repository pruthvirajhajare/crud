import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachpipe'
})
export class SerachpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
