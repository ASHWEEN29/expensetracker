import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExpenseList from '../components/ExpenseList';
import ExpenseSummary from '../components/ExpenseSummary';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import BudgetForm from '../components/BudgetForm';

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);

    const storedBudget = localStorage.getItem('budget');
    if (storedBudget) {
      setBudget(parseFloat(storedBudget));
    }
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(24);
    doc.text('Expense Report', 14, 22);
    doc.setFontSize(12);
    doc.autoTable({
      head: [['Description', 'Amount', 'Category', 'Date']],
      body: expenses.map(expense => [
        expense.description,
        `$${expense.amount.toFixed(2)}`,
        expense.category,
        new Date(expense.date).toLocaleDateString(),
      ]),
    });
    doc.save('expense-report.pdf');
  };

  return (
    <div className="home-container">
      <h1>Expense Tracker</h1>
      <div>
        <Link to="/add">
          <button className="add-expense-button">Add Expense</button>
        </Link>
        <button onClick={generatePDF} className="pdf-button">Download PDF</button>
      </div>
      <BudgetForm budget={budget} setBudget={setBudget} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
};

export default Home;
