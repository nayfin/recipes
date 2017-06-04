import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { RecipesService } from '../recipes/recipes.service';

@Injectable()
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient("Carrots", 4),
    new Ingredient("Tomatoes", 7),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor( private recipesService: RecipesService ) {

    this.recipesService.recipeIngredientsEmitted.subscribe((ingredients) => {
      this.ingredients.push(...ingredients);
    //  this.ingredientsChanged.emit(this.ingredients.slice());
    });

  }

  getIngredients() {
    return this.ingredients; //.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  //  this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
