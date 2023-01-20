import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  @Output() condition = new EventEmitter<{recipes: boolean, shopping: boolean}>();

  recipesBoolean:boolean = true;
  shoppingBoolean:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onRecipes() {
    this.recipesBoolean = true;
    this.shoppingBoolean = false;
    this.condition.emit({recipes: this.recipesBoolean, shopping: this.shoppingBoolean});
  }
  
  onShopping() {
    this.recipesBoolean = false;
    this.shoppingBoolean = true;
    this.condition.emit({recipes:this.recipesBoolean,shopping:this.shoppingBoolean});
  }

}
