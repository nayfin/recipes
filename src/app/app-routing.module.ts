import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesHomeComponent } from './recipes/recipes-home/recipes-home.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipesHomeComponent},
      { path: ':id', component: RecipeDetailComponent}
  ]},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: 'recipes'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
