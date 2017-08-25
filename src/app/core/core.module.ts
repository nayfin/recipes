import { RecipesApiService } from './../shared/api-services/recipes.api.service';
import { RecipesService } from './../recipes/recipes.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { AuthGuard } from './../auth/auth-guard.service';
import { AuthService } from './../auth/auth.service';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../modules/material.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
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