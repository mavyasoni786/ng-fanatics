import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Hello-project';
  constructor(public mRecipeService: RecipeService){}

}
