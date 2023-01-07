import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [{name:'A Test Recipe', description:'This is simply a test',imagePath:'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg' },{name:'A Test Recipe2', description:'This is simply a test2',imagePath:'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg' }] 
  
  // recipes: Recipe[] = [
  //   new Recipes('A Test Recipe','This is simply a test','https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg')
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}
