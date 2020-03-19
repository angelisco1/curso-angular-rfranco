import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarDigitos'
})
export class OcultarDigitosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const numDigitosVisibles = args || 4;
    let digitosOcultos = value.slice(0, -numDigitosVisibles);
    let digitosVisibles = value.slice(-numDigitosVisibles);
    // La opcion \S coge todos los caracteres menos los espacios
    return digitosOcultos.replace(/\S/g, '*') + digitosVisibles;
  }

}
