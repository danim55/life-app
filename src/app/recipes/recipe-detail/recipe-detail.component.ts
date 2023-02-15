import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetailed: Recipe;
  auxId: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.auxId = this.route.snapshot.params['id'];
    this.recipeDetailed = this.recipeService.getRecipeById(+this.auxId);
  }

  onAddToShoppingList(){
    this.recipeService.toShoppingList(this.recipeDetailed.ingredients)
  }

}
