import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddExpense = () => {
  const [expense, setExpense] = useState({ description: '', amount: '', paidBy: '' });
  let history = useHistory();

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/expenses', expense)
      .then(() => {
        history.push('/');
      })
      .catch(error => console.error('Error posting data:', error));
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" name="description" value={expense.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input type="number" className="form-control" name="amount" value={expense.amount} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Paid By</label>
          <input type="text" className="form-control" name="paidBy" value={expense.paidBy} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
