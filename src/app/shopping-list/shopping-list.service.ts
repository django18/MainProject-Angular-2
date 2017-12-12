import { Ingredients } from "./ingredients.model";
import { EventEmitter } from "@angular/core";


export class ShoppingListService{
    
    ingredientsChanged=new EventEmitter<Ingredients[]>();
    private ingredients:Ingredients[]=[
        new Ingredients('Onion',5),
        new Ingredients('Tomato',7)
      ];

     
    constructor(){}

    getIngredients(){
        return this.ingredients.slice();
    }
  
    add(ingredient:Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}