import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// TODO: Move all MdModules to own barrel module
import { MdToolbarModule,
         MdIconModule,
         MdAutocompleteModule,
         MdDatepickerModule,
         MdInputModule,
         MdRadioModule,
         MdSelectModule,
         MdSliderModule,
         MdSlideToggleModule,
         MdMenuModule,
         MdSidenavModule,
         MdListModule,
         MdGridListModule,
         MdCardModule,
         MdTabsModule,
         MdButtonModule,
         MdButtonToggleModule,
         MdChipsModule,
         MdProgressSpinnerModule,
         MdProgressBarModule,
         MdDialogModule,
         MdTooltipModule,
         MdSnackBarModule,
         } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesHomeComponent } from './recipes/recipes-home/recipes-home.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesService } from './recipes/recipes.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    // TODO: Move all MdModules to own barrel module
    MdToolbarModule,
    MdIconModule,
    MdAutocompleteModule,
    MdDatepickerModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule,
    // Pull in our RoutingModule
    AppRoutingModule,
  ],
  providers: [
    ShoppingListService,
    RecipesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
