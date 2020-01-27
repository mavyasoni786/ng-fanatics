import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecipeRecordsComponent } from './recipe-records/recipe-records.component';
import { HomeComponent } from './home/home.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
  , {
    path: 'recipes', component: RecipeRecordsComponent
  }, {
    path: 'home', component: HomeComponent
  }, {
    path: 'add-recipe', component: AddRecipeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
