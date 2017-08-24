// Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import 'hammerjs';
// AppModules
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
// Routing
import { AppRoutingModule } from './app-routing.module';
// App Components
import { AppComponent } from './app.component';
// Services
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesService } from './recipes/recipes.service';
// API Services
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesApiService } from './shared/api-services/recipes.api.service';

@NgModule({
  declarations: [
    AppComponent,
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
    // RecipesModule,
    CoreModule,
    ShoppingListModule,
    AuthModule,
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
