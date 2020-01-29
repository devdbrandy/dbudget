import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Budget } from 'src/app/shared/models/budget.model';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.scss']
})
export class BudgetItemComponent implements OnInit {
  @Input() budget: Budget;
  @Output() deleteClick: EventEmitter<any> = new EventEmitter();
  @Output() cardClick: EventEmitter<any> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.deleteClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }

}
