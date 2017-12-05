import { Component, OnInit,ElementRef,ViewChild,EventEmitter,Output } from '@angular/core';
import { Ingredients } from '../ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @ViewChild('nameInput')nameInputEl:ElementRef;
  @ViewChild('amountInput')amountInputEl:ElementRef;
  @Output()addIngredientEvnt=new EventEmitter<Ingredients>();

  ngOnInit() {
  }

  addIngredient(){

    this.addIngredientEvnt.emit(new Ingredients(this.nameInputEl.nativeElement.value,this.amountInputEl.nativeElement.value));
  }

  deleteIngredient(){

  }

  clearInput(){
    this.nameInputEl.nativeElement.value="";
    this.amountInputEl.nativeElement.value="";
    
  }



}
