import React from "react";

import './NewExpense.css'

import NewexpenseForm from "./NewexpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enterdExpenseData)=>{

        const expenseData ={
            ...enterdExpenseData,
            id:Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData)
        
    }

    return (
    <div  className="new-expense">

        <NewexpenseForm  onsaveExpenseData ={saveExpenseDataHandler}/>

    </div>
    )
}

export default NewExpense