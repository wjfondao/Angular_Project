import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-four-sixty-three',
  templateUrl: './section-four-sixty-three.component.html',
  styleUrls: ['./section-four-sixty-three.component.css']
})
export class SectionFourSixtyThreeComponent implements OnInit {
  servers = [];
 
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.servers.push('Another server');
  }

  onRemoveServer(id: number){
    const position = id + 1;
    this.servers.splice(position, 1);
  }

}
