import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients!:Ingredient[]
  // ingredients:Ingredient[] = [{name:'apples',amount:10},{name:'tomatos',amount:5}];
  constructor(private shoppingService: ShoppingService) { }
  

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients = ingredients;
    })
  }

  // onIngredientAdded(ingredient:Ingredient){
  //   console.log(ingredient);
  //   this.ingredients.push(ingredient);
    
  // }
}
