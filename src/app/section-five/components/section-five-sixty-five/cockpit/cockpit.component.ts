import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // 69. Binding to Custom Events : @Output()
  @Output() serverCreate = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpData') blueprintData = new EventEmitter<{serverName: string, serverContent: string}>();

  @Output() nameEvent = new EventEmitter<string>();

  // 69. Binding to Custom Events
  // newServerName = 'fondao';
  // newServerContent = 'fondaoContent';

  name: string = "fondao";

  // ------ 76. Getting Access to the Template & DOM with @ViewChild 
  @ViewChild('newServerInput') newServerInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement){
       console.log(nameInput);
    console.log(nameInput.value);
    // console.log(this.newServerInput)
    
    // let propoty1: {serverName: string, serverContent: string} = {
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent
    // }

    //  this.serverCreate.emit(propoty1);

     this.nameEvent.emit(this.name);
    
    // 69. Binding to Custom Events
    // this.serverCreate.emit({
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent
    // });

    // ------ 76. Getting Access to the Template & DOM with @ViewChild : serverContent: this.newServerInput.nativeElement.value
    this.serverCreate.emit({
      serverName: nameInput.value,
      serverContent: this.newServerInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    // 69. Binding to Custom Events
    // this.blueprintData.emit({
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent
    // });

    // ------ 76. Getting Access to the Template & DOM with @ViewChild : serverContent: this.newServerInput.nativeElement.value
    this.blueprintData.emit({
      serverName: nameInput.value,
      serverContent: this.newServerInput.nativeElement.value
    });
  }
  onAddBlueprintTest(){
    console.log(this.newServerInput);
    
  }

}
