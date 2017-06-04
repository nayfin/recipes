import { Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';


export const appRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'shpping-list', component: ShoppingListComponent },
]
