import React, { useState } from 'react';
import './Expenses.css';
import ExpenseFilter from '../ExpenseDateFilter/ExpenseFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {filteredExpenses.length === 0 && <p>No expense found</p>}
                
                {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        key = {expense.id}
                        date = {expense.date}
                        title = {expense.title}
                        amount = {expense.amount}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;