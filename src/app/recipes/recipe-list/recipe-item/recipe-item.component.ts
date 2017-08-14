import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() id: number;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

  }
  onRecipeEdit(e) {
    this.router.navigate([this.id, 'edit'], {relativeTo: this.route});
    e.stopPropagation();
  }
  onRecipeDelete(e) {
    console.log('Write delete recipe logic');
    e.stopPropagation();
  }
}
