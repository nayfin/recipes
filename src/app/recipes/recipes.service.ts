import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipesService {

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

  recipeSelected = new EventEmitter<Recipe>();

  recipeIngredientsEmitted = new EventEmitter<Ingredient[]>();

  constructor() { }

  getRecipes(){
    console.log("getRecipes",this.recipes);
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe){
    console.log("addRecipe",recipe);
    this.recipes.push(recipe);
  }

}
