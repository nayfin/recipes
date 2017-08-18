import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() id: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private recipesService: RecipesService) { }

  ngOnInit() {

  }
  onEditRecipe(e) {
    this.router.navigate([this.id, 'edit'], {relativeTo: this.route});
    e.stopPropagation();
  }
  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
