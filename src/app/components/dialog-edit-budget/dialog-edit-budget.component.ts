import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Budget } from 'src/app/shared/models/budget.model';

@Component({
  selector: 'app-dialog-edit-budget',
  templateUrl: './dialog-edit-budget.component.html',
  styleUrls: ['./dialog-edit-budget.component.scss']
})
export class DialogEditBudgetComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogEditBudgetComponent>,
    @Inject(MAT_DIALOG_DATA) public budget: Budget
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFormSubmit(updatedBudget: Budget) {
    this.dialogRef.close(updatedBudget);
  }

}
