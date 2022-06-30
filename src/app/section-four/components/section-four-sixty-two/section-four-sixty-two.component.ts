import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-four-sixty-two',
  templateUrl: './section-four-sixty-two.component.html',
  styleUrls: ['./section-four-sixty-two.component.css']
})
export class SectionFourSixtyTwoComponent implements OnInit {
  // servers = [];
  servers;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.servers.push();
  }

  onRemoveServer(id: number){
    const position = id + 1;
    this.servers.splice(position, 1);
  }

}
