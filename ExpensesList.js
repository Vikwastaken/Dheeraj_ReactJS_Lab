import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/expenses')
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>{expense.description}: ${expense.amount} - Paid by {expense.paidBy}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
