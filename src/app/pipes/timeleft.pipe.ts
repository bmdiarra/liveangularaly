import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeleft'
})
export class TimeleftPipe implements PipeTransform {


  transform(value: Date): string {
    const timeactu = new Date().getTime() - value.getTime();

    const y = Math.floor(timeactu / 1000 / 60 / 60 / 24 / 365) ;
    if ( y > 0) { return y + ' an' ; }
    const d = Math.floor(timeactu / 1000 / 60 / 60 / 24) ;
    if ( d > 0) { return d + 'jour(s)' ; }
    const h = Math.floor((timeactu / 1000 / 60 / 60) % 24) ;
    if ( h > 0) { return h + 'heure(s)' ; }
    const m = Math.floor((timeactu / 1000 / 60) % 60) ;
    if ( m > 0) { return d + 'minute(s)' ; }
    const s = Math.floor((timeactu / 1000) % 60) ;
    if ( s > 0) { return s + 'seconde(s)' ; }

  }

}
