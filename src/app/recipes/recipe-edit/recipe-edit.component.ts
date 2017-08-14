import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  public id: number;
  public editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Get the recipe id from route parameters and decide if we are in edit mode
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] !== undefined;
          console.log(this.editMode);
        }
      );
  }

}