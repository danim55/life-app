import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetailed: Recipe;
  auxId: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.auxId = params['id']
          this.recipeDetailed = this.recipeService.getRecipe(+this.auxId);
        }
      )
  }

  onAddToShoppingList(){
    this.recipeService.toShoppingList(this.recipeDetailed.ingredients)
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

}
