import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {}

  // Set is a typescript function
  @Input() set appHighlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  // I can also do this

  // @Input('appHighlight') set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

}
