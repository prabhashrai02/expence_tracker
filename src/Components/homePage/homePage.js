import React from "react";
import Navbar from "../Navbar/Navbar";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import AddExpense from "../AddExpense/AddExpense";
import Card from "../Card/Card";
import './HomePage.css';

function Homepage() {
    
    let expense = [
        {
            id: `1`,
            date: new Date(),
            title: `new`,
            amount: 200
        }
    ]

    const saveNewData = (enteredData) => {
        console.log(enteredData);
    }

    return (
        <div>
            <Navbar />
            <AddExpense onSaveData={saveNewData} />
            <Card className="expenses">
                    <ExpenseItem 
                        date = {expense[0].date}
                        title = {expense[0].title}
                        amount = {expense[0].amount}
                    />
                
            </Card>
            
        </div>
    )
}

export default Homepage;