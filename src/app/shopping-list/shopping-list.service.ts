import { Ingredients } from "./ingredients.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";


export class ShoppingListService{
    
    ingredientsChanged=new Subject<Ingredients[]>();
    ingredientsEdit=new Subject<number>();
   // ingredientsDelete=new Subject<number>();
    private ingredients:Ingredients[]=[
        new Ingredients('Onion',5),
        new Ingredients('Tomato',7)
      ];

     
    constructor(){}

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }
  
    add(ingredient:Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index:number,newIngredient:Ingredients){
        console.log("Updating Index :",index," and newIngredient",newIngredient);
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        console.log("Deleting Index :",index);
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    
}