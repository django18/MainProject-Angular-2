import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-router.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipe/recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    ShoppingListComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
