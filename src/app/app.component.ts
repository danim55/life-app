import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipesSelected:boolean = true;
  shoppingSelected:boolean = false;

  onCondition(condition : {recipes: boolean, shopping: boolean}){
    this.recipesSelected=condition.recipes;
    this.shoppingSelected=condition.shopping;
  }

}
