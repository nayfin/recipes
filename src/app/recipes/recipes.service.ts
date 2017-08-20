import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { RecipesApiService } from '../shared/api-services/recipes.api.service';

@Injectable()
export class RecipesService {

  public recipes: Recipe[] = [];
  recipesChanged = new Subject<Recipe[]>();
  recipeIngredientsEmitted = new EventEmitter<Ingredient[]>();

  constructor( private recipesApiService: RecipesApiService) { }

  // setRecipes(recipes: Recipe[]) {
  //   this.recipes = recipes;
  //   this.recipesChanged.next(this.recipes.slice());
  // }
  getRecipes() {
    this.recipesApiService.getRecipes().subscribe(
      (recipes: Recipe[]) => {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes);
      },
      (error) => console.error(error)
    );
    return this.recipes;
  }
  getRecipeById(id: number) {
    return this.recipes[id];
  }
  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
    return this.recipes.length - 1;
  }
  updateRecipe (index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
