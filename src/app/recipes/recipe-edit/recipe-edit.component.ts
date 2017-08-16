import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  public id: number;
  public editMode = false;
  recipeForm: FormGroup;
  recipeName = '';
  recipeDescription = '';
  recipeImageUrl = '';

  constructor(private route: ActivatedRoute,
              @Inject(FormBuilder) fb: FormBuilder) { }

  ngOnInit() {
    // Get the recipe id from route parameters and decide if we are in edit mode
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] !== undefined;
          console.log(this.editMode);
        }
      );
  }

  onSubmitRecipe() {
    console.log(this.recipeForm);
  }

}
