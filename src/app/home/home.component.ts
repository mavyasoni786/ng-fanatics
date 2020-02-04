import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recipes = [];
  recipesCopy = [];
  search: string = ""
  constructor(public mRecipeService: RecipeService) {
    this.recipes = [...mRecipeService.recipeList]
    this.recipesCopy = [...mRecipeService.recipeList]
  }

  ngOnInit() {

  }

  clicked(index) {
    this.recipes[index].isFavourite = !(this.recipes[index].isFavourite);
  }

  doSearch() {
    let term = this.search;
    this.recipes = this.recipesCopy.filter(function(tag) {
        return tag.name.indexOf(term) >= 0;
    });
  }



}
