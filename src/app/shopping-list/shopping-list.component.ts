import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  public ingredients: Ingredient[] = [];
  public selectedIngredient: Ingredient = this.ingredients[0];
  private subscription: Subscription;

  constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe((ingredients) => {
        this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddIngredientToList() {
    console.log('Build the damn thing!');
  }

  onSelectIngredient(ingredient: Ingredient){
    console.log(ingredient);
  }
}
