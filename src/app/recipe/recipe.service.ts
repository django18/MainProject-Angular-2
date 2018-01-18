import { Injectable,OnInit,EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredients } from "../shopping-list/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";
import {Http} from '@angular/http';
import { Response } from "@angular/http";
import { AuthService } from "../auth/auth.service";


@Injectable()
export class RecipeService implements OnInit{
    fireBaseUrl='https://recipe-project-e1e00.firebaseio.com/recipes.json';
    recipesChanged=new Subject<Recipe[]>();
    recipeSelected=new EventEmitter<Recipe>();
    constructor(private shoppingService:ShoppingListService,private http:Http,
                private authService:AuthService){}

    ngOnInit(){}

    private recipes:Recipe[]=[
        new Recipe(1,'Pizza','Pizza is a traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments.','https://pakwired.com/wp-content/uploads/2017/09/pizza-1.jpg','Italian',[new Ingredients("Penne",10),new Ingredients("Sauce",1)]),
        new Recipe(2,'Bread','Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been popular around the world and is one of the oldest artificial foods, having been of importance since the dawn of agriculture.','https://d2gk7xgygi98cy.cloudfront.net/6667-3-large.jpg','Brazilian',[new Ingredients("Penne",10),new Ingredients("Sauce",1)]),
        new Recipe(3,'Pasta',
        'Also commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).','https://static01.nyt.com/images/2016/05/03/dining/03COOKING-PASTAWITHBUTTER2/03COOKING-PASTAWITHBUTTER2-videoSixteenByNineJumbo1600.jpg',
        'Indian',[new Ingredients("Penne",10),new Ingredients("Sauce",1)])
      ];


      getRecipe(index:number):Recipe{
        //   const recipe=this.recipes.find(
        //       (recipe)=>{
        //         return recipe.id===id;
        //       }
        //   )
          return this.recipes[index];
      }
      

      getRecipes(){
          //return this.recipes.slice();          
          const token=this.authService.getToken();
          this.http.get(this.fireBaseUrl+'?auth='+token)
          .subscribe(
            (response:Response)=>{
              const recipes:Recipe[]=response.json();
              this.setRecipes(recipes);
              this.recipesChanged.next(this.recipes.slice());
            }
          );
      }

      setRecipes(recipes:Recipe[]){
        console.log("Setting recipes:",recipes);
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      saveRecipes(){
        const token=this.authService.getToken();
        return this.http.put(this.fireBaseUrl+'?auth='+token,this.getRecipes());
      }

      showRecipeDetail(recipe:Recipe){
          this.recipeSelected.emit(recipe);
      }

      addRecipe(newRecipe:Recipe){
        console.log("Add Recipe :",newRecipe);
        this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
        console.log("Delete Recipe at index:",index);
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number,newRecipe:Recipe){
        console.log("Update Recipe :",index," with NewRecipe:",newRecipe);
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      addIngredientsToList(ingredients:Ingredients[]){
        this.shoppingService.addIngredients(ingredients);
      }
}