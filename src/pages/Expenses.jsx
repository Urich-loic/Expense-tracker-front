import DataTableList from "../components/DataTableList";
import ExpensesForm from "../components/ExpensesForm";
import { AppContext } from "../Context/AppContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Expenses() {
  const { Expense } = useContext(AppContext);
  const navigate = useNavigate();
  const [status, setStatus]=useState(false);
  const displayModal = ()=>{

  }

  return (
    <div className="p-5 w-[100%]">
      
      <div className="flex justify-between align-middle py-3">
        <span className="text-2xl">Manager Revenue</span>
        <div className="flex gap-3">
          <button onClick={()=>setStatus(!status)} className="bg-blue-600 text-white text-xs py-2 px-5 rounded hover:bg-blue-500 hover:cursor-pointer">Add revenue</button>
          <button className="bg-green-600 text-white text-xs py-2 px-5 rounded hover:bg-green-500 hover:cursor-pointer">Update revenue</button>
        </div>
      </div>
      {status&&<ExpensesForm status={status} setStatus={setStatus} />}
      <DataTableList Expense={Expense} />
    </div>
  );
}
