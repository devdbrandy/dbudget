import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { BudgetItemComponent } from './components/budget/budget-item/budget-item.component';
import { BudgetComponent } from './components/budget/budget.component';
import { IncomeBudgetPipe } from './pipes/income-budget.pipe';
import { ExpenseBudgetPipe } from './pipes/expense-budget.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BudgetFormComponent,
    BudgetComponent,
    BudgetItemComponent,
    IncomeBudgetPipe,
    ExpenseBudgetPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
