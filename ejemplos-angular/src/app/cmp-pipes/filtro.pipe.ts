import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(lista: Array<string>, txtFiltro: string): Array<string> {
    return lista.filter(elem => {
      return elem.includes(txtFiltro);
    });
  }

}
