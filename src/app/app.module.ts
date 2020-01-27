import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { RecipeRecordsComponent } from './recipe-records/recipe-records.component';
import { HoverEffectDirective } from './hover-effect.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeFormComponent,
    RecipeRecordsComponent,
    HoverEffectDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }