import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-router.module';
import { RecipeService } from './recipe/recipe.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { RecipeModule } from './recipe/recipe.module';
import { SharedModule } from './shared/shared.module';
import { SlModule } from './shopping-list/sl.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { SlRoutingModule } from './shopping-list/sl-Routing.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    AppRoutingModule,
    RecipeModule,
    SlModule,
    AuthModule
  ],
  providers: [ShoppingListService,RecipeService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
