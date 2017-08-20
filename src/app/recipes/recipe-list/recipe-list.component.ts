import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  public recipes: Recipe[];
  private subscription: Subscription;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    // Sets recipes array to array from service
    this.subscription = this.recipesService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    const recipes = this.recipesService.getRecipes();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
