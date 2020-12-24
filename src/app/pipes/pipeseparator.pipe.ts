import { Utilservice } from './../services/utilservice.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator'
})
export class PipeseparatorPipe implements PipeTransform {

  constructor(private u: Utilservice){

  }

  transform(value: number, sep: string): string {
    return this.u.numberSeparator(value, sep);
  }

}
