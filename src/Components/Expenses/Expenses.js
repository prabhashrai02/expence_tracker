import React, { useState } from 'react';
import './Expenses.css';
import ExpenseFilter from '../ExpenseDateFilter/ExpenseFilter';
import Card from '../Card/Card';
import ExpenseList from '../ExpenseList/ExpenseList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <li>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />

                <ExpenseList items={filteredExpenses} />
            </Card>
        </li>
    );
};

export default Expenses;