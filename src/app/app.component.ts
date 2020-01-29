import { Component } from '@angular/core';
import { Budget } from './shared/models/budget.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'budget-hub';

  budgetItems: Budget[] = [
    { amount: -10, description: 'dwede' },
    { amount: 50, description: 'wefw' },
    { amount: 100, description: 'wefwqwdqwe' },
  ];

  addBudget(newBudget: Budget) {
    this.budgetItems.push(newBudget);
  }

  deleteBudget(budget: Budget) {
    const index = this.budgetItems.indexOf(budget);
    this.budgetItems.splice(index, 1);
  }
}
