import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Budget } from '../../shared/models/budget.model';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent implements OnInit {
  @Input() budget: Budget;
  @Output() formSubmit: EventEmitter<Budget> = new EventEmitter<Budget>();
  currency = '₦';
  isNewBudget: boolean;

  constructor() { }

  ngOnInit() {
    if (this.budget) {
      this.isNewBudget = false;
    } else {
      this.isNewBudget = true;
      this.budget = new Budget(null, '');
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
