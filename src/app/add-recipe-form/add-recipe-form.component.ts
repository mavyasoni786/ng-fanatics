import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.scss']
})
export class AddRecipeFormComponent implements OnInit {
  constructor(public mRecipeService: RecipeService) { }
  ngOnInit() { }
  
  onAddRecipe(name: string, chef: string, info: string, image: string, type: string,isFavourite: boolean=false) {
    this.mRecipeService.recipeList.push({ name: name, image: image, chef: chef, info: info, type: type,isFavourite: isFavourite })
  }

}
