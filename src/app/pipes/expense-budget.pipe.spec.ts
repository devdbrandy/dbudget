import { ExpenseBudgetPipe } from './expense-budget.pipe';

describe('ExpenseBudgetPipe', () => {
  it('create an instance', () => {
    const pipe = new ExpenseBudgetPipe();
    expect(pipe).toBeTruthy();
  });
});
