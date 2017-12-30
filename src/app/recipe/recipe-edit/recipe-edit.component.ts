import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FormGroup,FormControl,RequiredValidator,Validators,FormArray } from '@angular/forms';
import { Ingredients } from '../../shopping-list/ingredients.model';
import { Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  index:number;
  id:number;
  editMode=false;
  recipeEditForm:FormGroup;
  constructor(private route:ActivatedRoute,private recipeService:RecipeService,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.index=params['id'];
        this.editMode=params['id']!=null?true:false;
        //console.log(this.editMode);
        this.formInit();
      }
    )
  }

  formInit(){
    let recipeName="",
        recipeDesc="",
        recipeImgUrl="",
        recipeCountry="",
        recipeIngredients=new FormArray([]);

    if(this.editMode){
      const recipeItem=this.recipeService.getRecipe(this.index);
      this.id=recipeItem.id;
      recipeName=recipeItem.name;
      recipeCountry=recipeItem.country;
      recipeImgUrl=recipeItem.imageUrl;
      recipeDesc=recipeItem.description;
      if(recipeItem['ingredients']){
        for(let ingredient of recipeItem.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,[Validators.required]),
              'amount':new FormControl(ingredient.amount,[Validators.required])
            })
        );    
    }    
    }
  }

    this.recipeEditForm=new FormGroup({
      'name':new FormControl(recipeName,[Validators.required]),
      'imageUrl':new FormControl(recipeImgUrl,[Validators.required]),
      'description':new FormControl(recipeDesc,[Validators.required]),
      'country':new FormControl(recipeCountry,[Validators.required]),
      'ingredients':recipeIngredients
    });
  }


onSubmit(){
  console.log("Recipe form:",this.recipeEditForm);
  // let recipeId=this.id,
  //     recipeName=this.recipeEditForm.get('name').value,
  //     recipeDesc=this.recipeEditForm.get('description').value,
  //     recipeImgUrl=this.recipeEditForm.get('imageUrl').value,
  //     recipeCountry=this.recipeEditForm.get('country').value,
  //     recipeIngredients=this.recipeEditForm.get('ingredients').value;

  // const newRecipe=new Recipe(recipeId,recipeName,recipeDesc,recipeImgUrl,recipeCountry,recipeIngredients);
  
  if(this.editMode)
  this.recipeService.updateRecipe(this.index,this.recipeEditForm.value);
  else this.recipeService.addRecipe(this.recipeEditForm.value);
  this.onCancel();
}

onAddNewIngredient(){
  (<FormArray>this.recipeEditForm.get('ingredients')).push(
    new FormGroup({
      'name':new FormControl(null,[Validators.required]),
      'amount':new FormControl(null,[Validators.required])
    })
  )
}

onDeleteIngredient(index:number){
  (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index);
}

onCancel(){
  this.router.navigate(['../'],{relativeTo:this.route});
}

onDeleteRecipe(){
  this.recipeService.deleteRecipe(this.index);
  this.router.navigate(['/recipe']);
}

}
