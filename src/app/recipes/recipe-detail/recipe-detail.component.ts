import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService, private router: Router) { }

  ngOnInit() {

  }
  onAddIngredient(){
    this.recipesService.recipeIngredientsEmitted.emit(this.recipe.ingredients);
    this.router.navigate(['shopping-list'])
  }

}
