import { Component, OnInit, OnDestroy, Inject, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  ingredientForm: FormGroup;
  editMode = false;
  editItemIndex: number;
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService,
              @Inject(FormBuilder) fb: FormBuilder) {
    this.ingredientForm = fb.group({
      name: [null, Validators.minLength(2)],
      amount: [null, Validators.required, Validators.min(0)]
    });
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe( (index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      console.log(this.editMode, this.editItemIndex);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onAddIngredient(form) {
    console.log(form);
    const newIngredient: Ingredient = new Ingredient( form.name,
                                                      form.amount );
    this.shoppingListService.addIngredient(newIngredient);
    form.reset();
  }
  onClearIngredient() {
    this.ingredientForm.reset();
  }

}
