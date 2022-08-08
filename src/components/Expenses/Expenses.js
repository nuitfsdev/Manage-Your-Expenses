import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('all');
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear)
    setFilteredYear(selectedYear);
  };
  let filteredExpenses=[];
  if(filteredYear!=='all')
  {
    filteredExpenses=props.items.filter(expense=>{
      return expense.date.getFullYear().toString()===filteredYear
    })
  }
  else{
    filteredExpenses=[...props.items];
  }
  

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
       <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;