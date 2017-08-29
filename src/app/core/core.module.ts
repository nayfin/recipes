import { DesignModule } from './../modules/design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../app-routing.module';
import { RecipesApiService } from './../shared/api-services/recipes.api.service';
import { RecipesService } from './../recipes/recipes.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { AuthGuard } from './../auth/auth-guard.service';
import { AuthService } from './../auth/auth.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    DesignModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,
    ShoppingListService,
    RecipesService,
    RecipesApiService,
  ]
})
export class CoreModule { }