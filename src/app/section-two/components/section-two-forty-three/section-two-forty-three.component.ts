import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-two-forty-three',
  templateUrl: './section-two-forty-three.component.html',
  styleUrls: ['./section-two-forty-three.component.css']
})
export class SectionTwoFortyThreeComponent implements OnInit {

  showSecret = false;
  log = [];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetail(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length * 2);
    // this.log.push(this.log.length + 1);
    console.log(this.log)
  }

  onDeleteDetail(){
    this.log.pop();
  }

}
