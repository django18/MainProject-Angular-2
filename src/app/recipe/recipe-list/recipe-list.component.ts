import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  // recipes:Recipe[]=[
  //   new Recipe('Pizza','Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments.','https://pakwired.com/wp-content/uploads/2017/09/pizza-1.jpg','Italian'),
  //   new Recipe('Bread','Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been popular around the world and is one of the oldest artificial foods, having been of importance since the dawn of agriculture.','https://d2gk7xgygi98cy.cloudfront.net/6667-3-large.jpg','Brazilian'),
  //   new Recipe('Pasta',
  //   'Also commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).','https://static01.nyt.com/images/2016/05/03/dining/03COOKING-PASTAWITHBUTTER2/03COOKING-PASTAWITHBUTTER2-videoSixteenByNineJumbo1600.jpg','Indian')
  // ];
  recipeChangeSubscription:Subscription;
  recipes:Recipe[]=[];
  //@Output()recipeWasSelected=new EventEmitter<Recipe>();

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();

    this.recipeChangeSubscription=this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes;
      }
    )
  }

  ngOnDestroy(){
    this.recipeChangeSubscription.unsubscribe();
  }

  // onRecipeSelect(recipeData:Recipe)
  // {
  //   console.log("Recipe List Event()")
  //   this.recipeWasSelected.emit(recipeData);
  // }


}
