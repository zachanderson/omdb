import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bar'
})
export class BarPipe implements PipeTransform {

  barSize: number=250;

  transform(value: string, args?:any ): any {
    if(!value){
      return '0px';
    }

    if(value.endsWith('%')){
      return +(value.split('%')[0]) / 100 * this.barSize + 'px';
    }
    if(value.endsWith('/10')){
      return +(value.split('/10')[0]) / 10 * this.barSize + 'px';
    }
    if(value.endsWith('/100')){
      return +(value.split('/100')[0]) / 100 * this.barSize + 'px';
    }



  }

}
