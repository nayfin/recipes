import { Component, OnInit, OnDestroy, Inject, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
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
  editedIngredient: Ingredient;
  subscription: Subscription;


  constructor(private shoppingListService: ShoppingListService,
              @Inject(FormBuilder) fb: FormBuilder) {
    this.ingredientForm = fb.group({
      name: [null, [Validators.minLength(2)]],
      amount: [null, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe( (index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editedIngredient = this.shoppingListService.getIngredient(index);
      this.ingredientForm.setValue({ name: this.editedIngredient.name, amount: this.editedIngredient.amount });
      console.log(this.editMode, this.editItemIndex);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onSubmitIngredient() {
    console.log(this.ingredientForm);
    const newIngredient: Ingredient = new Ingredient( this.ingredientForm.get('name').value,
                                                      this.ingredientForm.get('amount').value );
    if ( this.editMode ) {
      this.shoppingListService.updateIngredient( this.editItemIndex, newIngredient);
    } else { this.shoppingListService.addIngredient(newIngredient); }
    this.editMode = false;
    this.ingredientForm.reset();
  }

  onClearIngredient() {
    this.editMode = false;
    this.ingredientForm.reset();
  }

}
