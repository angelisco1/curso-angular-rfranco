import { Directive, HostListener, HostBinding, Input } from '@angular/core';

interface IDatosExtra {
  colorFondoInicial: string,
  parpadea: boolean
}

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective {

  @HostBinding('style.color') colorLetra: string = 'black';
  @HostBinding('style.backgroundColor') colorFondo: string = 'white';
  @HostBinding('style.marginTop') top: string;
  @HostBinding('style.marginLeft') left: string;
  @Input('appPowerMode') datosExtra: IDatosExtra;
  color1: string = 'white';
  intervalId: any = null;

  constructor() {
    console.log('Se aplica la directiva');
    console.log('DatosExtra CONST: ', this.datosExtra);
  }

  ngOnInit() {
    console.log('DatosExtra INIT: ', this.datosExtra);
    if (this.datosExtra.parpadea) {
      this.parpadear()
    }
    if (this.datosExtra.colorFondoInicial) {
      this.colorFondo = this.datosExtra.colorFondoInicial
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  parpadear() {
    this.intervalId = setInterval(() => {
      console.log('Parpadeando...')
      this.color1 = this.color1 == 'white' ? this.datosExtra.colorFondoInicial : 'white';
      this.colorFondo = this.color1;
    }, 400)
  }

  @HostListener('input') aplicaPowerMode() {
    console.log('Se está escribiendo algo...')
    this.colorLetra = this.getRandomColor();
    this.colorFondo = this.getRandomColor();
    this.top = '5px'
    this.left = '8px'
    setTimeout(() => {
      this.top = '0px'
      this.left = '0px'
    }, 700)
  }

  getRandomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
  }

}
