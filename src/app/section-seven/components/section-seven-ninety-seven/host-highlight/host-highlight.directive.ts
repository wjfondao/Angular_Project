import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostHighlight]'
})
export class HostHighlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    
  }
  //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
  //"HostListener" เพื่อมาใช้สำหรับดักจับ event ต่างๆ ที่จะเกิดขึ้นกับ element ที่เราใช้งาน.
   
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }
}
