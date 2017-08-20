import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesHomeComponent } from './recipes/recipes-home/recipes-home.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipesHomeComponent},
      { path: 'new', component: RecipeEditComponent},
      { path: ':id', component: RecipeDetailComponent},
      { path: ':id/edit', component: RecipeEditComponent}
  ]},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
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
