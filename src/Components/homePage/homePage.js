import Navbar from "../Navbar/Navbar";
import ExpenceItem from "../ExpencesItem/ExpenceItem";

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
            <ExpenceItem 
                date = {expence[0].date}
                title = {expence[0].title}
                amount = {expence[0].amount}
            />
        </div>
    )
}

export default Homepage;