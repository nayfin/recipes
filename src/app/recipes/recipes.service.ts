import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipesService {
  // API variables
  // TODO: Extract all this into it's own service
  private apiBaseUrl = 'https://bh-fresh-recipes.firebaseio.com';
  public recipes: Recipe[] = [
    new Recipe('Roast Cauliflower',
               'You roast cauliflower',
               'https://static01.nyt.com/images/2015/10/15/dining/15COOKING-CAULIFLOWER1/15COOKING-CAULIFLOWER-articleLarge.jpg',
               [
                 new Ingredient("cauliflower", 2)
               ]),
    new Recipe('Roast Duck',
              'You roast a duck',
              'http://thewoksoflife.com/wp-content/uploads/2015/11/peking-duck-recipe-11.jpg',
              [
                new Ingredient("duck", 2),
                new Ingredient("onions", 10)
              ]),
    new Recipe('Fried Duck',
              'You fry a duck',
              'http://vietworldkitchen.com/.a/6a00d8341ef22f53ef012876c3bbb6970c-500wi',
              [
                new Ingredient("duck", 2),
                new Ingredient("oil", 5),
              ]),
  ];
  recipesChanged = new Subject<Recipe[]>();
  recipeIngredientsEmitted = new EventEmitter<Ingredient[]>();

  constructor(private http: Http) { }
  storeAllRecipes() {
    this.http.put(`${this.apiBaseUrl}/fresh-recipes.json`, this.recipes).subscribe((response) => {
      console.log(response.json());
    });
  }
  getRecipes() {
    return this.recipes.slice();
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
