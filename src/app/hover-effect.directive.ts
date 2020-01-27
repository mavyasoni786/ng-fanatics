import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  constructor(private ele: ElementRef) { }


  @Input() defualtColor: string;
  @Input('highLightColor') highlightColor: string;

  @HostListener('mouseover') onMouseOver() {
    if(this.defualtColor=="Veg")
    {

      this.highlight("#00e676");

    }
    else{
      this.highlight("#f44336");

    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white');
  }

  private highlight(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
