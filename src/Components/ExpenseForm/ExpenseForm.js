
// we can also use this type of function call
const ExpenseForm = () => {
    return <form>
        <div className='add_expense_controls'>
            <div className='add_expense_control'>
                <label>Title</label>
                <input type="text" />
            </div>
            <div className='add_expense_control'>
                <label>Amount</label>
                <input type="text" min={0.01} step={0.01} />
            </div>
            <div className='add_expense_control'>
                <label>Date</label>
                <input type="text" min={"2019-01-01"} max={"2022-12-31"} />
            </div>
            <div className='add_expense_actions'>
                <button type='submit'>
                    Add Expense
                </button>
            </div>
        </div>
    </form>
}


export default ExpenseForm;