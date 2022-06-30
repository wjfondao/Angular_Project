import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-two-forty-two',
  templateUrl: './section-two-forty-two.component.html',
  styleUrls: ['./section-two-forty-two.component.css']
})
export class SectionTwoFortyTwoComponent implements OnInit {
  serverName = 'Testserver';
  servers = ['Testserver', 'Testserver 2']
  serverCreated = false;
 

  constructor() {

   }

  ngOnInit(): void {
  }

  onCreatServer(){
    this.servers.push(this.serverName);
  }
}
