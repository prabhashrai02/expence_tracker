import React, {useState} from 'react';

import './ExpenseForm.css';

// we can also use this type of function call
const ExpenseForm = (props) => {

    const [enteredtitle, setenteredtitle] = useState('');
    const [entereddate, setentereddate] = useState('');
    const [enteredamount, setenteredamount] = useState('');
    
    // const [userInput, setUserInput] = useState({
    //     enteredtile: '',
    //     enteredamount: '',
    //     entereddate: ''
    // });
    
    const titleChangehandler = (event) =>{
        
        setenteredtitle(event.target.value);
        
        // setUserInput({
            //     ...userInput,
            //     enteredtile: event.target.value,
            // });
            
            //always use if depend on prev state as this gives most updated value
            // setUserInput((prevState) =>{
                //     return {
                    //         ...prevState,
                    //         enteredtile: event.target.value,
                    //     }
                    // });
    }
                
    const dateChangehandler = (event) =>{
        setentereddate(event.target.value);
        //     setUserInput({
            //         ...userInput,
            //         entereddate: event.target.value,
            //     });
    }
                    
    const amountChangehandler = (event) =>{
        setenteredamount(event.target.value);
    //     setUserInput({
    //         ...userInput,
    //         enteredamount: event.target.value,
    //     });
    }

const submithandler = (event) =>{
    event.preventDefault();

    const expensedata= {
        title: enteredtitle,
        amount: enteredamount,
        date: new Date(entereddate)
    };

    
    props.onSaveExpenseData(expensedata);

    setenteredtitle('');
    setenteredamount('');
    setentereddate('');
}

return <form onSubmit={submithandler}>
        <div className='add_expense_controls'>
            <div className='add_expense_control'>
                <label>Title</label>
                <input type="text" 
                    onChange={titleChangehandler} 
                    value={enteredtitle}
                />
            </div>
            <div className='add_expense_control'>
                <label>Amount</label>
                <input type="number" 
                    min='0.01' 
                    step='0.01' 
                    onChange={amountChangehandler}
                    value={enteredamount}
                    />
            </div>
            <div className='add_expense_control'>
                <label>Date</label>
                <input type="date"
                    min='2019-01-01' 
                    max='2032-12-31'
                    placeholder='dd.mm.yyyy' 
                    onChange={dateChangehandler}
                    value={entereddate}
                />
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