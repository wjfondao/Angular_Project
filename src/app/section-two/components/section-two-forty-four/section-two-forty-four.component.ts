import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-two-forty-four',
  templateUrl: './section-two-forty-four.component.html',
  styleUrls: ['./section-two-forty-four.component.css']
})
export class SectionTwoFortyFourComponent implements OnInit {

  showSecret = false;
  log = [];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetail(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

}
