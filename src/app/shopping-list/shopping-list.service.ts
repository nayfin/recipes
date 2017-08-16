import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';
import { RecipesService } from '../recipes/recipes.service';

@Injectable()
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient("Carrots", 4),
    new Ingredient("Tomatoes", 7),
    new Ingredient("Carrots", 4),
    new Ingredient("Carrots", 4),
    new Ingredient("Tomatoes", 7),
    new Ingredient("Carrots", 4),
    new Ingredient("Tomatoes", 7),
    new Ingredient("Carrots", 4),
    new Ingredient("Tomatoes", 7),
    new Ingredient("Carrots", 4),
    new Ingredient("Tomatoes", 7),
  ];

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  constructor( private recipesService: RecipesService ) {

    this.recipesService.recipeIngredientsEmitted.subscribe((ingredients) => {
      this.ingredients.push(...ingredients);
    });

  }

  getIngredients() {
    return this.ingredients;
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  
}
