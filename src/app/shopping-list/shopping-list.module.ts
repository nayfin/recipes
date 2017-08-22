import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../modules/material.module';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    ShoppingListRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})

export class ShoppingListModule {

}
