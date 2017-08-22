// Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import 'hammerjs';
// AppModules
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
// App Components
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
// Services
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesService } from './recipes/recipes.service';
// API Services
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesApiService } from './shared/api-services/recipes.api.service';
// Routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    // Pull in our RoutingModule
    AppRoutingModule,
    MaterialModule,
    RecipesModule,
    ShoppingListModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    ShoppingListService,
    RecipesService,
    RecipesApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
