import { Component, OnInit } from '@angular/core';
import { Ingredients } from './ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientToAdd:Ingredients;
  ingredients:Ingredients[]=[];
  // ingredients:Ingredients[]=[
  //   new Ingredients('Onion',5),
  //   new Ingredients('Tomato',7)
  // ];

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged
    .subscribe((ingredients:Ingredients[])=>{
      this.ingredients=ingredients;
    })
  }

}
