import { NgModule } from "@angular/core";
import {Routes,RouterModule} from'@angular/router';
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes:Routes=[
    {path:'',redirectTo:'/recipe',pathMatch:'full'},
    {path:'recipe',component:RecipeComponent},
    {path:'shopping-list',component:ShoppingListComponent},
    //{path:'**',component:'Page Not Found - 404'}
  ];

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
export class AppRoutingModule{

}