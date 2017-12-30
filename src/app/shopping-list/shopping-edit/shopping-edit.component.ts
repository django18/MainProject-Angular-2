import { Component, OnInit,ElementRef,ViewChild,EventEmitter,Output } from '@angular/core';
import { Ingredients } from '../ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  editSubscription:Subscription;
  editMode=false;
  editItemIndex:number;
  editItem:Ingredients;
  @ViewChild('f')ingredientsForm:NgForm;
  constructor(private shoppingListService:ShoppingListService) { }

  @ViewChild('nameInput')nameInputEl:ElementRef;
  @ViewChild('amountInput')amountInputEl:ElementRef;
 // @Output()addIngredientEvnt=new EventEmitter<Ingredients>();

  ngOnInit() {
    this.editSubscription=this.shoppingListService.ingredientsEdit.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editItemIndex=index;
        this.editItem=this.shoppingListService.getIngredient(index);
        this.ingredientsForm.setValue({
          name:this.editItem.name,
          amount:this.editItem.amount
        })
        
      } 
    )
  }

  addIngredient(){
    
    if(this.editMode)
    {     
      const newIngredient=new Ingredients(this.ingredientsForm.value.name,this.ingredientsForm.value.amount);      
      this.shoppingListService.updateIngredient(this.editItemIndex,newIngredient);
      this.editMode=false;
      this.ingredientsForm.reset();
    }
    else this.shoppingListService.add(new Ingredients(this.ingredientsForm.value.name,this.ingredientsForm.value.amount));
    //this.shoppingListService.add(new Ingredients(this.nameInputEl.nativeElement.value,this.amountInputEl.nativeElement.value));
    //this.addIngredientEvnt.emit(new Ingredients(this.nameInputEl.nativeElement.value,this.amountInputEl.nativeElement.value));
  }

  deleteIngredient(){

  }

  clearInput(){
    this.ingredientsForm.reset();    
    this.editMode=false;
  }



}
