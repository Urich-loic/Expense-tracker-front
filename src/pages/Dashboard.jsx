import DataTable from "react-data-table-component";
import "../App.css";
import Balance from "../components/Balance";
import Expenses from "../components/Expenses";
import SpendingByCategory from "../components/SepndingByCategory";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import DataTableList from "../components/DataTableList";

export default function Dashboard() {
  const { Expense } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-col justify-stretch w-full">
        <div className="flex gap-3 w-full">
          <div className=" flex w-[50%]">
            <Balance />
          </div>

          <div className="flex flex-col gap-3 w-[50%]">
            <Expenses />
            <SpendingByCategory />
          </div>
        </div>
        <div className="RecentTransaction grow  pt-7">
          <div className="flex justify-between">
            <h3>Recent transactions</h3>
            <div className="">
              <form action="">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="border-1 border-gray-400 rounded-xl px-2 py-1"
                />
              </form>
            </div>
          </div>
          <div className="w-full rounded-2xl mt-5 overflow-hidden">
            <DataTableList Expense={Expense} />
          </div>
        </div>
      </div>
    </>
  );
}
