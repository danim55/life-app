import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') shoppingForm: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex : number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((index: number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      })
  }

  onAddItem(f: NgForm) {
    if(this.editMode !== true){
      const value = f.value;
      const newIngredient = new Ingredient(value.name, value.amount);
      this.shoppingListService.onIngredientAdded(newIngredient);
    } else {
      this.shoppingListService.onChangeIngredient(this.editedItemIndex, this.shoppingForm);
    }
  }

  onClear() {
    this.shoppingListService.onClearList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
