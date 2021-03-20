import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './header/app.component';
import { ShoppingList } from './shopping-list/app.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { AppRecipeItem } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { AppRecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { RecipiesComponent } from './recipies/recipies.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    ShoppingList,
    RecipeListComponent,
    ShoppingListEditComponent,
    AppRecipeItem,
    AppRecipeDetailComponent,
    RecipiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
