import React, {useState} from 'react';
import Navbar from "../Navbar/Navbar";
import AddExpense from "../AddExpense/AddExpense";
import './HomePage.css';
import Expenses from "../Expenses/Expenses";

const expense = [
    {
        id: `1`,
        date: new Date(),
        title: `new`,
        amount: 200
    }
];

function Homepage() {
    const [addData, setaddData] = useState(expense);

    const saveNewData = (enteredData) => {
        setaddData((prevExpence) =>{
            return [enteredData, ...prevExpence];
        });
    };

    return (
        <div>
            <Navbar />
            <AddExpense onSaveData={saveNewData} />
            <Expenses items={addData} />
        </div>
    )
}

export default Homepage;