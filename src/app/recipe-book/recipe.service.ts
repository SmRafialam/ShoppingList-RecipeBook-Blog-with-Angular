import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [{name:'A Test Recipe', description:'Breakfast Recipe',imagePath:'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg',ingredients:[{name:'Meat',amount:2},{name:'French fries',amount:20}] },{name:'Test Recipe2', description:'Lunch Recipe',imagePath:'https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA',ingredients:[{name:'Buns',amount:2},{name:'Eggs',amount:20}] }] 
    constructor(private shoppingService: ShoppingService) { }

    getRecipes(){
      return this.recipes.slice();
    }

    addIngsToShoppingList(ingredients:Ingredient[]){
      this.shoppingService.addIng(ingredients);
    }

}
