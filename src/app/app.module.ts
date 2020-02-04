import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {ToastrModule} from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { RecipeRecordsComponent } from './recipe-records/recipe-records.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { RecipeService } from './services/recipe.service';
import { FavouriteRecipesComponent } from './favourite-recipes/favourite-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeFormComponent,
    RecipeRecordsComponent,
    LoginComponent,
    HomeComponent,
    TopHeaderComponent,
    FavouriteRecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
