import React from 'react';

const BudgetProgress = ({ budget, expenses }) => {
  const totalSpent = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBudget = budget - totalSpent;
  const percentageUsed = (totalSpent / budget) * 100;

  return (
    <div className="budget-progress-container">
      <h2>Budget Overview</h2>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentageUsed}%` }}
        ></div>
      </div>
      <p>Total Spent: ${totalSpent.toFixed(2)}</p>
      <p>Remaining Budget: ${remainingBudget.toFixed(2)}</p>
    </div>
  );
};

export default BudgetProgress;
