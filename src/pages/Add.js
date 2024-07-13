import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Add = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const navigate = useNavigate();

  const handleAddExpense = () => {
    const newExpense = { id: uuidv4(), description, amount: parseFloat(amount), category, date: new Date() };
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    storedExpenses.push(newExpense);
    localStorage.setItem('expenses', JSON.stringify(storedExpenses));
    navigate('/');
  };

  return (
    <div className="form-container">
      <h1>Add Expense</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleAddExpense(); }}>
        <div className="form-group">
          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit" className="form-button">Add Expense</button>
      </form>
    </div>
  );
};

export default Add;
