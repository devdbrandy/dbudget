import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Budget } from 'src/app/shared/models/budget.model';
import { DialogEditBudgetComponent } from '../dialog-edit-budget/dialog-edit-budget.component';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  @Input() budgetItems: Budget[];
  @Input() budgetType: string;
  @Output() deleteItem: EventEmitter<Budget> = new EventEmitter<Budget>();
  @Output() updateItem: EventEmitter<IBudgetUpdate> = new EventEmitter<IBudgetUpdate>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDeleteBudget(budget: Budget) {
    this.deleteItem.emit(budget);
  }

  openDialog(budget: Budget) {
    const dialogRef = this.dialog.open(DialogEditBudgetComponent, {
      width: '580px',
      data: budget,
    });

    dialogRef.afterClosed().subscribe(result => {
      // check if result has value
      if (result) {
        this.updateItem.emit({
          oldBudget: budget,
          newBudget: result,
        });
      }

      // replace budget item with updated data from the form
    });
  }

}

export interface IBudgetUpdate {
  oldBudget: Budget;
  newBudget: Budget;
}
