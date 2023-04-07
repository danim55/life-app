import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes: Recipe[] = this.recipeService.getRecipes();
        this.http
            .put(
                'https://life-app-add1c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
                recipes
            )
            .subscribe(response => {
                console.log(response);
            });
    }

    requestRecipes() {
        return this.http
            .get<Recipe[]>(
                'https://life-app-add1c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
            )
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients : []
                        }
                    })
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                }))
    }
}