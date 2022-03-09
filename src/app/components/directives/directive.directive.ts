import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(elr:ElementRef) {
    elr.nativeElement.style.color = "red";
   }

}
