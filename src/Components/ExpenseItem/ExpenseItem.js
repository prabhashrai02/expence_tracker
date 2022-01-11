import React, { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
import Card from '../Card/Card';

function ExpenceItem(props) {

    const [title, setTitle] = useState(props.title);

    const changetitle = () => {
        setTitle('Prabhash');
    }

    return (
        <Card className="expense_item">
            <ExpenseDate date={props.date} />
            <div className="expense_item_description">
                <h2>{title}</h2>
                <div className="expense_item_price">{props.amount}</div>
                <button onClick={changetitle} >Click me</button>
            </div>
        </Card>
    )
}

export default ExpenceItem;