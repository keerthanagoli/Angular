import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector:'shopping-list',
    templateUrl:'app.component.html',
    styleUrls:['app.component.css']
})
export class ShoppingList {
    ingredients : Ingredient[] =[
        new Ingredient("Apples",5),
        new Ingredient("Tomatoes",10)
    ];
}