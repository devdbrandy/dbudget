import { Component } from '@angular/core';
import { Budget } from './shared/models/budget.model';
import { IBudgetUpdate } from './components/budget/budget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Budget Calculator';

  budgetItems: Budget[] = [];
  totalBudget = 0;

  addBudget(newBudget: Budget) {
    this.budgetItems.push(newBudget);
    this.totalBudget += newBudget.amount;
  }

  deleteBudget(budget: Budget) {
    const index = this.budgetItems.indexOf(budget);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= budget.amount;
  }

  updateBudget({ oldBudget, newBudget }: IBudgetUpdate) {
    const index = this.budgetItems.indexOf(oldBudget);
    this.budgetItems[index] = newBudget;

    this.totalBudget -= oldBudget.amount;
    this.totalBudget += newBudget.amount;
  }
}
