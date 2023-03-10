import { Ingredient } from "../shopping-list/ingredient.model";

export interface Recipe {
   name: string;
   description: string; 
   imagePath: string;
   ingredients: Ingredient[];
}