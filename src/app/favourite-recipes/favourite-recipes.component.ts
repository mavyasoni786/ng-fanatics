import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-favourite-recipes',
  templateUrl: './favourite-recipes.component.html',
  styleUrls: ['./favourite-recipes.component.scss']
})
export class FavouriteRecipesComponent implements OnInit {

  private recipes : any= [];

  constructor(public mRecipeService: RecipeService) {
    const self = this;
    mRecipeService.recipeList.forEach( (value) => {
      if(value.isFavourite){
        self.recipes.push(value);
      }
    });
  }

  ngOnInit() {

  }

  clicked(index) {
    this.recipes[index].isFavourite = !(this.recipes[index].isFavourite);
  }
}
