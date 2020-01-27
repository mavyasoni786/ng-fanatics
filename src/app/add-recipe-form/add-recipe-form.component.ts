import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.scss']
})
export class AddRecipeFormComponent implements OnInit {

  @Input() recipes = []
  @Output() addRecipe = new EventEmitter<{ name: String, chef: String, info: String, image: String, type: String }>();

  constructor(public mRecipeService: RecipeService){
    this.recipes = [...mRecipeService.recipeList];
  }
  

  ngOnInit() {
  }


  onAddRecipe(name: string, chef: string, info: String, image: string, type: string) {
    this.addRecipe.emit({ name: name, image: image, chef: chef, info: info, type: type })
  }

}
