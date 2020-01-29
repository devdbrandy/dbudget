import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Budget } from 'src/app/shared/models/budget.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  @Input() budgetItems: Budget[];
  @Input() budgetType: string;
  @Output() deleteItem: EventEmitter<Budget> = new EventEmitter<Budget>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteBudget(budget: Budget) {
    this.deleteItem.emit(budget);
  }

}
