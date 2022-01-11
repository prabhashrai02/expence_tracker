function ExpenceItem(props) {
    return (
        <div>
            <div>{props.date.toISOString()}</div>
            <div>{props.title}</div>
            <div>{props.amount}</div>
        </div>
    )
}

export default ExpenceItem;