import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecipeRecordsComponent } from './recipe-records/recipe-records.component';
import { HomeComponent } from './home/home.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { AuthGuard } from './services/authGuard/ auth.guard';
import { FavouriteRecipesComponent } from './favourite-recipes/favourite-recipes.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'recipes', canActivate: [AuthGuard],component: RecipeRecordsComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'add-recipe',canActivate: [AuthGuard], component: AddRecipeFormComponent },
  { path: 'favourite-recipes',canActivate: [AuthGuard], component: FavouriteRecipesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
