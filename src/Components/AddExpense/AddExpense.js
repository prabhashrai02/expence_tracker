import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './AddExpense.css';

const AddExpense= (props) =>{

    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }

        props.onSaveData(expenseData);
    };
    
    
    return(
        <div className="add_expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} />
        </div>
    )
}

export default AddExpense;