import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { RecipesService } from '../../recipes/recipes.service';

@Injectable()
export class RecipesApiService {
    // API variables
    // TODO: Extract all this into it's own service
    private apiBaseUrl = 'https://bh-fresh-recipes.firebaseio.com';

    constructor(private recipesService: RecipesService,
                private http: Http) { }

    storeAllRecipes() {
        this.http.put(`${this.apiBaseUrl}/fresh-recipes.json`, this.recipesService.getRecipes()).subscribe((response) => {
        console.log(response.json());
        });
    }

    getRecipes() {
        return this.http.get(`${this.apiBaseUrl}/fresh-recipes.json`)
    }
}