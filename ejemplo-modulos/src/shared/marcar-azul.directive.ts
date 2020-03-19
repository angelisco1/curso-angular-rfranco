import { style } from '@angular/animations';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  // selector: '[appMarcar]'
  selector: '[appMarcarAzul]'
})
export class MarcarAzulDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'blue';
  }

}
