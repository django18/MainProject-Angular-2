import { Component, OnInit ,Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input()recipeData:Recipe;
  recipeData:Recipe;
  index:number;
   
  constructor(private recipeService:RecipeService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    //const recipeId=+this.route.params['id'];
    //this.recipeData=this.recipeService.getRecipe(recipeId);

    this.route.params.subscribe(
      (params:Params)=>{
        this.index=+params['id'];
        this.recipeData=this.recipeService.getRecipe(this.index);
      }
    )
  }

  addToShoppingList(recipeData:Recipe){
    this.recipeService.addIngredientsToList(recipeData.ingredients);
  }

  
  

}
