import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    // Sets recipes array to array from service
    this.recipes = this.recipesService.getRecipes();
    // Emits a selected recipe so that the RecipeDetailComponent doesn't load empty
    this.recipesService.recipeSelected.emit(this.recipes[0]);
  }
}
