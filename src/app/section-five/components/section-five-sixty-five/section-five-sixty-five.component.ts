import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-five-sixty-five',
  templateUrl: './section-five-sixty-five.component.html',
  styleUrls: ['./section-five-sixty-five.component.css']
})
export class SectionFiveSixtyFiveComponent implements OnInit {
  // 67. Binding to Custom Properties step 2
  serverElements = [
    {type: 'server', name: 'Testserver', content: 'Just a test!'},
    {type: 'server', name: 'Testserver', content: 'Just a test!'}
];

  name: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  // 69. Binding to Custom Events : 
  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push ({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // 69. Binding to Custom Events : 
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push ({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onEvent(eventData:string){
    this.name = eventData;
    
  }

  // 79. Seeing Lifecycle Hooks in Action
  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }

}
