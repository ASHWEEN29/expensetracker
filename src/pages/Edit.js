import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expense, setExpense] = useState(null);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const foundExpense = storedExpenses.find((exp) => exp.id === id);
    if (foundExpense) {
      setExpense(foundExpense);
    }
  }, [id]);

  const handleEditExpense = () => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const updatedExpenses = storedExpenses.map((exp) => exp.id === id ? expense : exp);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    navigate('/');
  };

  return expense ? (
    <div className="form-container">
      <h1>Edit Expense</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleEditExpense(); }}>
        <div className="form-group">
          <label>Description</label>
          <input type="text" value={expense.description} onChange={(e) => setExpense({ ...expense, description: e.target.value })} required />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input type="number" value={expense.amount} onChange={(e) => setExpense({ ...expense, amount: parseFloat(e.target.value) })} required />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select value={expense.category} onChange={(e) => setExpense({ ...expense, category: e.target.value })}>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit" className="form-button">Edit Expense</button>
      </form>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Edit;
