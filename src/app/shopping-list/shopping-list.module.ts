import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListRouterModule } from "./shopping-list-router.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        ShoppingListRouterModule
    ]
})
export class ShoppingListModule {}