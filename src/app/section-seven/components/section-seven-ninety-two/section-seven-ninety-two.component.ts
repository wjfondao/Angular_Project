import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-seven-ninety-two',
  templateUrl: './section-seven-ninety-two.component.html',
  styleUrls: ['./section-seven-ninety-two.component.css']
})
export class SectionSevenNinetyTwoComponent {
  //numbers = [ 1, 2, 3, 4, 5 ]; odd คี่ even คู่
  oddNumber = [1, 3, 5];
  evenNumber = [ 2, 4 ];
  clickNumber:number = 0;
  onlyOdd = false;

}
