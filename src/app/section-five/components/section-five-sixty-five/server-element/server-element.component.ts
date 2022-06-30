import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy,
  OnInit,
  ViewChild, 
  SimpleChanges,
  ViewEncapsulation, 
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // 73. More on View Encapsulation   
  encapsulation: ViewEncapsulation.None // None, Emulated, Native-> ShadowDom
})
export class ServerElementComponent implements 
OnInit, 
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
 {
  // 67. Binding to Custom Properties  => @input() is parent component step 1
  // 68. Assigning an Alias to Custom Properties :  @Input('srvElement') นามสมมุติ =>
  @Input('srvElement2') element: {type: string, name: string, content: string};
  @Input() name: string;

  // 80. Lifecycle Hooks and Template Access
  @ViewChild('heading',{static: true}) header: ElementRef;
 
  // 82. Getting Access to ng-content with @ContentChild
  @ContentChild('contentParagraph',{static: true}) paragraph: ElementRef;

  //top1
  constructor() { 
    console.log('Constructor called!!');
  }

  // 79. Seeing Lifecycle Hooks in Action
  ngOnChanges(changes: SimpleChanges){
    console.log('on changes called!!');
    console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnInit called!!');
    // 80. Lifecycle Hooks and Template Access
    console.log('this server:' + this.header.nativeElement.textContent);
    console.log('this content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck called!!');
  }

  ngAfterContentInit(){
    console.log('Af Content Init called!!');
  } 

  ngAfterContentChecked(){
    console.log('Af Content Check called!!');
    console.log('this content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log('Af view Init called!!');
    console.log('this view: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('Af view Check called!!');
  }

  ngOnDestroy(){
    console.log('On Destroy called!!');
  }

}
