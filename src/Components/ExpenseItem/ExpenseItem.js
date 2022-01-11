import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
import Card from '../Card/Card';

function ExpenceItem(props) {
    return (
        <Card className="expense_item">
            <ExpenseDate date={props.date} />
            <div className="expense_item_description">
                <h2>{props.title}</h2>
                <div className="expense_item_price">{props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenceItem;