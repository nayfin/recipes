import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipesService } from './recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  host: {class: 'app-body'},
})
export class RecipesComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {

  }
  onAddRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route });
  }
}
