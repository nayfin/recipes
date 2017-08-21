import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Recipe } from '../../Recipes/recipe.model';
import { AuthService } from '../../auth/auth.service';
// import { RecipesService } from '../../recipes/recipes.service';

@Injectable()
export class RecipesApiService {
  // API variables
  // TODO: Extract all this into it's own service
  private apiBaseUrl = 'https://bh-fresh-recipes.firebaseio.com';

  constructor(//private recipesService: RecipesService,
              private http: Http,
              private authService: AuthService) { }

  // storeAllRecipes() {
  //     this.http.put(`${this.apiBaseUrl}/fresh-recipes.json`, this.recipesService.getRecipes()).subscribe((response) => {
  //     console.log(response.json());
  //     });
  // }

  getRecipes() {

    const token = this.authService.getToken();

    return this.http.get(`${this.apiBaseUrl}/fresh-recipes.json?auth=${token}`)
      .map(
        (response: Response) => {
          const recipes = response.json();
          return recipes;
        }
      );
  }
}