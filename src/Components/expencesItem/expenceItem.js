import './expenceItem.css';

function ExpenceItem(props) {
    const day= props.date.toLocaleString('en-US', {day: '2-digit'});
    const month= props.date.toLocaleString('en-US', {month: 'long'});
    const year= props.date.getFullYear();
    return (
        <div className="expence_item">
            <div>
                {day} <br/>
                {month} <br/>
                {year}
            </div>
            <div>{props.title}</div>
            <div>{props.amount}</div>
        </div>
    )
}

export default ExpenceItem;