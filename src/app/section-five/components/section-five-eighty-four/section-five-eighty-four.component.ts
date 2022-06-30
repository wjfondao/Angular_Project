import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-five-eighty-four',
  templateUrl: './section-five-eighty-four.component.html',
  styleUrls: ['./section-five-eighty-four.component.css']
})
export class SectionFiveEightyFourComponent implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onIntervalFired(firedNumber: number){
    // console.log(firedNumber);
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }

}
