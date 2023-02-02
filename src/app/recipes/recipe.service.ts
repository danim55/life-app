import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test', 'https://freesvg.org/img/RecipeBook.png'),
        new Recipe('Another test Recipe', 'This is also a test', 'https://freesvg.org/img/RecipeBook.png'),
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}