import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 // 54. Adding Content to the Recipes Components
 recipes: Recipe[] = [
  new Recipe(
    'A test recipe',
    'This is simply a test',
    'https://img.delicious.com.au/Iok992Gi/w759-h506-cfill/del/2022/02/chicken-chickpea-curry-163942-1.jpg'
  )
];

  constructor() { }

  ngOnInit(): void {
  }

}
