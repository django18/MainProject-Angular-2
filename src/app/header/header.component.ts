import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()selectedNavEvntEmit=new EventEmitter<string>();
  constructor(private recipeService:RecipeService,private authService:AuthService) { }

  ngOnInit() {
  }

  onSelect(selectedNavItem:MouseEvent){
    console.log("selectedNavItem",selectedNavItem.srcElement.innerHTML);
    this.selectedNavEvntEmit.emit(selectedNavItem.srcElement.innerHTML);
  }

  onSave(){
    this.recipeService.saveRecipes()
      .subscribe(
        (response:Response) => { console.log('Recipes saved to firebase Db successfully')}
      );
  }

  onSignout(){
    this.authService.signOut();
  }

  onFetch(){
    this.recipeService.getRecipes();
  }

}
