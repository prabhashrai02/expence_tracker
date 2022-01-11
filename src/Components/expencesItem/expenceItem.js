import ExpenceDate from '../ExpenceDate/ExpenceDate';
import './ExpenceItem.css';

function ExpenceItem(props) {
    return (
        <div className="expence_item">
            <ExpenceDate date={props.date} />
            <div>{props.title}</div>
            <div>{props.amount}</div>
        </div>
    )
}

export default ExpenceItem;