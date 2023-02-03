import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Delicious Burguer',
        'Some classic burguer', 
        'https://c.pxhere.com/images/c8/c8/652bd1231b43ef2e00372ed23e45-1636310.jpg!d',
        [
            new Ingredient('Cheese',2),
            new Ingredient('Meat',1)
        ]),
        new Recipe('Pizza',
        'A carbonara pizza', 
        'https://www.publicdomainpictures.net/pictures/40000/velka/fresh-pizza.jpg',
        [
            new Ingredient('Cheese',2),
            new Ingredient('Tomato',1),
            new Ingredient('Bread',3)
        ]),
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}