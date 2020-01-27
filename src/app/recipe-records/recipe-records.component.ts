import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-records',
  templateUrl: './recipe-records.component.html',
  providers: [RecipeService]
})
export class RecipeRecordsComponent implements OnInit {

  @Input() recipes=[];
  constructor(public mRecipeService: RecipeService){
    this.recipes = mRecipeService.recipeList
  }

  ngOnInit() {

  }

}
