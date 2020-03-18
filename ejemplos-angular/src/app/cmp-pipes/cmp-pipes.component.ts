import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CurrencyPipe, registerLocaleData, DatePipe } from '@angular/common';

// Importamos los locales que vamos a usar
import localeEs from '@angular/common/locales/es';
import localeUk from '@angular/common/locales/uk';
import localeEn from '@angular/common/locales/en';
import localeEnGB from '@angular/common/locales/en-GB';

// Registramos los locales que queramos usar y les asignamos como segundo parámetro un alias
registerLocaleData(localeEs, 'es')
registerLocaleData(localeUk, 'uk')
registerLocaleData(localeEn, 'en')
registerLocaleData(localeEnGB, 'enGb')

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css'],
  providers: [
    // Le indicamos que vamos a proveer el identificador del locale y le damos como valor el alias que hemos puesto arriba
    // Este locale es el que se usara por defecto, y cambia el formato en el que se muestran algunas cosas como las monedas (aparece el simbolo a la derecha)
    { provide: LOCALE_ID, useValue: 'es'},
    CurrencyPipe,
    DatePipe
  ]
})
export class CmpPipesComponent implements OnInit {

  texto: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At est accusantium consequuntur debitis ex ipsa molestias saepe, rerum corporis alias qui illum soluta neque dicta! Architecto quidem accusantium at facilis!';
  precio: number = 3;
  mascotas: Array<string> = ['Gato', 'Canario', 'Hamster']
  hoy: Date = new Date();


  precioConSimbolo0: number = 4;
  precioConSimbolo1: string = '';
  precioConSimbolo2: string = '';
  precioConSimbolo3: string = '';
  precioConSimbolo4: string = '';
  precioConSimbolo5: string = '';
  precioConSimbolo6: string = '';

  date0: Date = new Date();
  date1: string = '';
  date2: string = '';
  date3: string = '';
  date4: string = '';
  date5: string = '';
  date6: string = '';
  date7: string = '';

  constructor(private currencyPipe: CurrencyPipe, private datePipe: DatePipe) { }

  ngOnInit() {
    this.initPrices()
    this.initDates()
  }

  addMascota(nuevaMascota) {
    this.mascotas.push(nuevaMascota);
  }

  initPrices() {
    // El primer parametro es el valor
    // El segundo parametro es el el codigo de la moneda que sale de la ISO
    // El tercer parametro indica si queremos mostrar el symbol o el code
    // El cuarto parametro indica el num de numeros que aparecen en los enteros, y cuantos decimales queremos que se muestren en el siguiente formato numEnteros.minNumDecimales-maxNumDecimales
    // El quito parametro es el locale a usar
    this.precioConSimbolo1 = this.currencyPipe.transform(this.precio, 'EUR');
    this.precioConSimbolo2 = this.currencyPipe.transform(this.precio, 'EUR', 'symbol');
    this.precioConSimbolo3 = this.currencyPipe.transform(this.precio, 'EUR', 'code');
    this.precioConSimbolo4 = this.currencyPipe.transform(this.precio, 'EUR', 'symbol', '3.3-4');
    this.precioConSimbolo5 = this.currencyPipe.transform(this.precio, 'EUR', 'symbol', '1.2', 'en');
    this.precioConSimbolo6 = this.currencyPipe.transform(this.precio, undefined, 'code', undefined, 'en');
  }

  initDates() {
    this.date1 = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
    this.date3 = this.datePipe.transform(new Date(), 'dd/MMM/yyyy', undefined, 'es');
    this.date2 = this.datePipe.transform(new Date(), 'dd/MMMM/yyyy', undefined, 'es');
    this.date4 = this.datePipe.transform(new Date(), undefined, undefined, 'es');
    this.date5 = this.datePipe.transform(new Date(), undefined, undefined, 'en');
    this.date6 = this.datePipe.transform(new Date(), undefined, undefined, 'uk');
    this.date7 = this.datePipe.transform(new Date(), undefined, undefined, 'enGb');
  }

}
