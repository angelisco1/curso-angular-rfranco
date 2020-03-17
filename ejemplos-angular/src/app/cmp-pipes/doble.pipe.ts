import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(num: number | string, ...args: any[]): number | string {
    if (args.length > 0) {
      num = num + args[0];
    }

    if (typeof(num) == 'string') {
      return num.repeat(2);
    }
    return num * 2;
  }

}
