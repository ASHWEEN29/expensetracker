import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseList = ({ expenses, setExpenses }) => {
  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter(exp => exp.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className="expense-item">
            <p>{expense.description} - ${expense.amount} - {expense.category}</p>
            <div className="expense-item-buttons">
              <Link to={`/edit/${expense.id}`}>
                <button className="edit-button">Edit</button>
              </Link>
              <button onClick={() => handleDelete(expense.id)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
