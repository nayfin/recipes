import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  public id: number;
  public editMode = false;
  recipeForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private recipesService: RecipesService) {

  }

  ngOnInit() {

    // Get the recipe id from route parameters and decide if we are in edit mode
    this.route.params
      .subscribe(
        (params: Params) => {
          const id: number  = +params['id'],
                recipe: Recipe = this.recipesService.getRecipeById(id);

          this.id = id;
          this.editMode = !isNaN(id);
          this.initForm(recipe);
        }
      );
  }

  onSaveRecipe() {
    const recipe: Recipe = this.recipeForm.value;
    if (this.editMode) {
      this.recipesService.updateRecipe(this.id, recipe);
      this.onDone();
    } else {
      const newRecipeId = this.recipesService.addRecipe(recipe);
      this.router.navigate(['../', newRecipeId], {relativeTo: this.route} );
    }
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      this.buildIngredient(null, null)
    );
  }
  buildIngredient(name: string, amount: number) {
    return this.fb.group({
        name: [name, [Validators.required]],
        amount: [amount, [Validators.required]]
      });
  }
  onRemoveIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  onDone() {
    this.recipeForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm(recipe) {

    const recipeName = this.editMode ? recipe.name : '',
          recipeDescription = this.editMode ? recipe.description : '',
          recipeImageUrl = this.editMode ? recipe.imageUrl : '',
          recipeIngredients = this.fb.array([]);

    if (this.editMode) {
      recipe.ingredients.forEach((ingredient, i, arr) => {
        recipeIngredients.push(
          this.buildIngredient(ingredient.name, ingredient.amount)
        );
      });
    }
    this.recipeForm = this.fb.group({
      name: [recipeName, [Validators.required]],
      description: [recipeDescription, [Validators.required]],
      imageUrl: [recipeImageUrl, [Validators.required]],
      ingredients: recipeIngredients
    });
  }

}
