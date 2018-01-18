import { NgModule } from "@angular/core";
import {Routes,RouterModule} from'@angular/router';
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from "./auth/auth.guard";
import { HomeComponent } from "./home/home.component";

const appRoutes:Routes=[
    //{path:'',redirectTo:'/recipe',pathMatch:'full'}
    {path:'',component:HomeComponent},
    //Lazy Loading all other components
    {path:'recipe',loadChildren:'./recipe/recipe.module#RecipeModule'},
    {path:'signin',loadChildren:'./auth/auth.module#AuthModule'},
    {path:'signup',loadChildren:'./auth/auth.module#AuthModule'},
    {path:'shopping-list',loadChildren:'./shopping-list/sl.module#SlModule'},
    //{path:'**',component:'Page Not Found - 404'}
  ];

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
export class AppRoutingModule{

}