import React,{useState} from "react"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter"

const  Expenses = (props)=> {
    const [filterdYear,setfilterdYear]= useState('2020')


    const filterChangeHandler = (event)=>{
        setfilterdYear(event.target.value)
        console.log(event.target.value);
    }
return (
  <div>
    <Card className="expenses">
        <ExpensesFilter  selected={filterdYear} onchangeFilter={filterChangeHandler}/>
           < ExpenseItem title={props.items[0].title} amount={props.items[0].amount}date={props.items[0].date} />
   < ExpenseItem title={props.items[1].title} amount={props.items[1].amount}date={props.items[1].date}/>
   < ExpenseItem title={props.items[2].title} amount={props.items[2].amount}date={props.items[2].date}/>
   < ExpenseItem title={props.items[3].title} amount={props.items[3].amount}date={props.items[3].date}/>

    </Card>
    </div>
)

}

 export default Expenses