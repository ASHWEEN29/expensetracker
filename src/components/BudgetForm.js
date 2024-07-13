import React, { useState, useEffect } from 'react';

const BudgetForm = ({ budget, setBudget }) => {
  const [budgetInput, setBudgetInput] = useState(budget);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudget(budgetInput);
    localStorage.setItem('budget', budgetInput);
  };

  useEffect(() => {
    const storedBudget = localStorage.getItem('budget');
    if (storedBudget) {
      setBudget(storedBudget);
    }
  }, [setBudget]);

  return (
    <div className="budget-form-container">
      <h2>Set Monthly Budget</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Budget Amount ($)</label>
          <input
            type="number"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="form-button">Set Budget</button>
      </form>
    </div>
  );
};

export default BudgetForm;
