import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecipeRecordsComponent } from './recipe-records/recipe-records.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
  , {
    path: 'recipes', component: RecipeRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
