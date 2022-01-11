import './expenceItem.css';

function ExpenceItem(props) {
    return (
        <div className="expence_item">
            <div>{props.date.toISOString()}</div>
            <div>{props.title}</div>
            <div>{props.amount}</div>
        </div>
    )
}

export default ExpenceItem;