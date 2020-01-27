import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Hello-project';
  constructor(public mRecipeService: RecipeService){}

  addRecipe(value:{name:string,chef:string,info:string,image:string,type:string}){
    this.mRecipeService.recipeList.push({
      name: value.name,
      chef: value.chef,
      info:value.info,
      image: value.image,
      type: value.type,
    });
  }
}
