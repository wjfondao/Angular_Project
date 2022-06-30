import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-two-forty-one',
  templateUrl: './section-two-forty-one.component.html',
  styleUrls: ['./section-two-forty-one.component.css']
})
export class SectionTwoFortyOneComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  ngOnInit(): void {
  }
  
  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
