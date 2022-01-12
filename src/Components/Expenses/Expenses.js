import React, { useState } from 'react';
import './Expenses.css';
import ExpenseFilter from '../ExpenseDateFilter/ExpenseFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let data = <p>No expense found</p>;

    if(filteredExpenses.length > 0){
        data= filteredExpenses.map((expense) => (
            <ExpenseItem 
                key = {expense.id}
                date = {expense.date}
                title = {expense.title}
                amount = {expense.amount}
            />
        ));
    };

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {data}
            </Card>
        </div>
    );
};

export default Expenses;