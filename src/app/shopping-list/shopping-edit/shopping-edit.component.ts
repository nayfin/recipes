import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('amount') amountRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddIngredient(){
    var ingredientName: string = this.nameRef.nativeElement.value,
        ingredientAmount: number = this.amountRef.nativeElement.value;
    var newIngredient: Ingredient = new Ingredient( ingredientName,
                                                    ingredientAmount )
    this.shoppingListService.addIngredient(newIngredient);
  }
}
