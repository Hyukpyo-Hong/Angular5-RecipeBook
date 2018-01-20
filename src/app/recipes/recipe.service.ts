import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',
            'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20),
            ]),
        new Recipe('The Second Test Recipe', 'This is simply a test',
            'https://img.grouponcdn.com/deal/ibndC8sSczsdM5whApdG/Z1-700x420/v1/c700x420.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
            ])
    ];

    constructor(private slService: ShoppingListService) { }
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
