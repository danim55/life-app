import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex : number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((index: number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
      })
  }

  onAddItem(f: NgForm) {
    const value = f.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.onIngredientAdded(newIngredient);
  }

  onClear() {
    this.shoppingListService.onClearList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
