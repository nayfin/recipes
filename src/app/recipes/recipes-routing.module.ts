import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesHomeComponent } from './recipes-home/recipes-home.component';
import { RecipesComponent } from './recipes.component';

const recipeRoutes: Routes = [
    { path: '', component: RecipesComponent, /* canActivate: [AuthGuard], */ children: [
      { path: '', component: RecipesHomeComponent},
      { path: 'new', component: RecipeEditComponent},
      { path: ':id', component: RecipeDetailComponent},
      { path: ':id/edit', component: RecipeEditComponent}
  ]},
]
@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule {

}