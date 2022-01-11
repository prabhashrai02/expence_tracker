import Navbar from "../Navbar/Navbar";
import ExpenceItem from "../ExpencesItem/ExpenceItem";
import Card from "../Card/Card";
import './HomePage.css';

function Homepage() {
    const expence = [
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
                <ExpenceItem 
                    date = {expence[0].date}
                    title = {expence[0].title}
                    amount = {expence[0].amount}
                />
            </Card>
            
        </div>
    )
}

export default Homepage;