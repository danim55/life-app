import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://freesvg.org/img/RecipeBook.png'),
    new Recipe('Another test Recipe', 'This is also a test', 'https://freesvg.org/img/RecipeBook.png'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipeElement: Recipe){
    this.recipeSelected.emit(recipeElement);
  }

}
