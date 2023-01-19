import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>(); 

  ingredients:Ingredient[] = [{name:'apples',amount:10},{name:'tomatos',amount:5}];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredients(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIng(ingredients:Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredients(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
