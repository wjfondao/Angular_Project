import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeworkjavascript',
  templateUrl: './homeworkjavascript.component.html',
  styleUrls: ['./homeworkjavascript.component.css']
})
export class HomeworkjavascriptComponent implements OnInit {

  menbers = [1 , 2 , 3]
  menberspop = [4 , 5 , 6]
  menbersshift = [7 , 8 , 9]
  menbersunshift = [1 , 2 , 3]

  text1:string = 'apple';
  text2:string = 'banana';
  
  // unit 5 concat
  result = this.menbers.concat(this.menberspop);
 //-------------------

 //unit 6 join()
 cars=["Toyota","Honda","Isuzu"]; 
 carsUseJoin:string = this.cars.join()
 carsFixJoin:string = this.cars.join(' : ')
 //--------------------

 // unit 8
 sumLengthcars = this.text1.length;

 //unit 9
 findcar = this.cars.find(element => element === "Honda");

 //unit 10 
menu = ['Espresso', 'Iced Coffee', 'Cappuccino', 'Latte', 'Iced Tea', 'Iced Pink Milk'];
resultmenu = this.menu.filter(element => element.includes('Iced'))
 
  constructor() { }

  ngOnInit(): void {
  }

  onAddnumber(num : number){
    this.menbers.push(num);
    console.log(this.menbers);
  }

  onDeletenumber(){
    this.menberspop.pop();
    console.log(this.menberspop);
  }

  onShiftnumber(){
    this.menbersshift.shift();
    console.log(this.menbersshift);
  }

  onUnshiftnumber(num : number){
    this.menbersunshift.unshift(num);
    console.log(this.menbersunshift);
  }

  onRever(){
    this.menbers.reverse();
  }
}
