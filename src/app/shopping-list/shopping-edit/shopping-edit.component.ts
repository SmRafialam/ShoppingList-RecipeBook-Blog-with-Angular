import { Component, ElementRef, EventEmitter, OnInit, ViewChild,Output } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('amountInput') amountInput!: ElementRef;

  @Output('clickIng') ingredientAdded = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    // const newIngredient = new Ingredient(ingName,ingAmount);
    //ingredients:Ingredient[] = [{name:'apples',amount:10},{name:'tomatos',amount:5}];
    const newIngredient:Ingredient = {name:ingName,amount:ingAmount};
    console.log(newIngredient);
    this.ingredientAdded.emit(newIngredient);

  }

}
