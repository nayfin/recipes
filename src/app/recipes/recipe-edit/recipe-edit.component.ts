import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    if (this.editMode) {
      console.log(this.recipeForm);
    }
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      this.fb.group({
        name: this.fb.control(null),
        amount: this.fb.control(null)
      })
    );
    // console.log("add new ingredient");
  }

  onRemoveIngredient(index: number) {
    // this.recipeForm.get('ingredients').value.splice(index, 1);
    console.log(index);
  }
  private initForm(recipe) {

    const recipeName = this.editMode ? recipe.name : '',
          recipeDescription = this.editMode ? recipe.description : '',
          recipeImageUrl = this.editMode ? recipe.imageUrl : '',
          recipeIngredients = this.fb.array([]);

    recipe.ingredients.forEach((ingredient, i, arr) => {
      recipeIngredients.push(
        this.fb.group({
          name: this.fb.control( ingredient.name),
          amount: this.fb.control( ingredient.amount)
        })
      );
    });
    this.recipeForm = this.fb.group({
      name: [recipeName, [Validators.required]],
      description: [recipeDescription, [Validators.required]],
      imageUrl: [recipeImageUrl, [Validators.required]],
      ingredients: recipeIngredients
    });
    console.log(this.recipeForm.get('ingredients').value );
  }

}
