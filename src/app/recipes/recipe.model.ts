import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public id: number;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, id: number,desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.id = id;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }

}