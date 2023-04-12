import React , {useState}from "react";

import './NewexpenseForm.css'

const NewexpenseForm = (props) => {

    const [enterdTitle, setEnterdTitle] = useState('')   
    const [enterdAmount, setEnterdAmount] = useState('')
    const [enterdDate, setEnterdDate] = useState('')

    const titleChangeHandler = (event) =>{
        console.log(event);
    setEnterdTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        setEnterdAmount(event.target.value);
   }
   const DateChangeHandler = (event) =>{
    setEnterdDate(event.target.value);
    }
    const submitHandler = (event)=>{

        event.preventDefault();

        const expenseData ={
            title:enterdTitle,
            amount:enterdAmount,
            date:new Date(enterdDate)
        }
        // console.log(expenseData);
        setEnterdTitle('');
        setEnterdAmount('');
        setEnterdDate('');
        props.onsaveExpenseData(expenseData)
    }
    
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"  value={enterdTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"  value ={enterdAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max ="2022-12-31"value={enterdDate} onChange={DateChangeHandler } />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </div>
    </form>
    )

}

export default NewexpenseForm