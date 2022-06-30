import { Directive,HostBinding, OnInit, ElementRef,Renderer2,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBackgroundNumber]'
})
export class BackgroundNumberDirective {

  @Input() defaultColor: string='transparent';
  @Input() highlightColor: string='';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  
  ngOnInit() {
    // 
    this.backgroundColor = this.defaultColor;
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
  

}
