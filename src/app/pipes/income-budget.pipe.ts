import { Pipe, PipeTransform } from '@angular/core';
import { Budget } from '../shared/models/budget.model';

@Pipe({
  name: 'incomeBudget',
  pure: false
})
export class IncomeBudgetPipe implements PipeTransform {

  transform(budgetItems: Budget[]): Budget[] {
    return budgetItems.filter(budget => budget.amount > 0);
  }

}
