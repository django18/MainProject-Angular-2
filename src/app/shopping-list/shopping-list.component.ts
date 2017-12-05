import { Component, OnInit } from '@angular/core';
import { Ingredients } from './ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientToAdd:Ingredients;
  ingredients:Ingredients[]=[
    new Ingredients('Onion',5),
    new Ingredients('Tomato',7)
  ];

  constructor() { }

  ngOnInit() {
  }

}
