import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const ExpenseSummary = ({ expenses }) => {
  const categories = ['Food', 'Transport', 'Utilities', 'Entertainment'];
  const data = categories.map(category => {
    const total = expenses.filter(exp => exp.category === category).reduce((acc, exp) => acc + exp.amount, 0);
    return { name: category, value: total };
  });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="expense-summary">
      <h2>Expense Summary</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseSummary;
