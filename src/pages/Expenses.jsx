import { useEffect, useState } from "react";

export default function Expenses(){
    const [Expenses, setExpenses] = useState(null);

    const getExpenses = async ()=>{
        const res = await fetch("http://127.0.0.1:8000/api/expense");
        const data = await res.json();
        console.log(data);
        setExpenses(Expenses);
    }

    
    useEffect(()=>{getExpenses()},[]);

    return <div>
        <h1>My Expense liste</h1>
        {Expenses.map((Expense)=>(
            <ul>{Expense.id}</ul>
        ))}
    </div>;
}