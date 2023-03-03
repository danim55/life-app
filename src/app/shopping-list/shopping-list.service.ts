import { NgForm } from "@angular/forms";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    onChangeIngredient(index: number, ingredient : NgForm){
        this.ingredients[index].name = ingredient.value.name;
        this.ingredients[index].amount = ingredient.value.amount;
    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    onClearList() {
        this.ingredients = this.ingredients.slice(0, 0);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}