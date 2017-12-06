import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()recipeItem:Recipe;
  @Output()recipeListItemClickEvntEmit=new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  recipeListItemClickEvnt(event){
    event.preventDefault();
    console.log("Recipe Item Event()");
    this.recipeListItemClickEvntEmit.emit();
  }


}
