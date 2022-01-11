import Navbar from "../Navbar/Navbar";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import './HomePage.css';

function Homepage() {
    const expense = [
        {
            id: `1`,
            date: new Date(),
            title: `new`,
            amount: 200
        }
    ]
    return (
        <div>
            <Navbar />
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