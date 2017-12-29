import { Ingredients } from "./ingredients.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";


export class ShoppingListService{
    
    ingredientsChanged=new Subject<Ingredients[]>();
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
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}