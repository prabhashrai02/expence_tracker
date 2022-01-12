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

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />

                {props.items.map((expense) => (
                    <ExpenseItem 
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