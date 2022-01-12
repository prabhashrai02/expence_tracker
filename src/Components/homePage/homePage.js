import Navbar from "../Navbar/Navbar";
import AddExpense from "../AddExpense/AddExpense";
import './HomePage.css';
import Expenses from "../Expenses/Expenses";

function Homepage() {
    
    const expense = [
        {
            id: `1`,
            date: new Date(),
            title: `new`,
            amount: 200
        }
    ];

    const saveNewData = (enteredData) => {
        console.log(enteredData);
    }

    return (
        <div>
            <Navbar />
            <AddExpense onSaveData={saveNewData} />
            <Expenses items={expense} />
        </div>
    )
}

export default Homepage;