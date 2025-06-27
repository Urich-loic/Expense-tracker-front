import DataTable from "react-data-table-component";
import "../App.css";
import Balance from "../components/Balance";
import Expenses from "../components/Expenses";
import SpendingByCategory from "../components/SepndingByCategory";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

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
            <table class="table-auto w-full p-7 border-0">
              <thead className="bg-gray-300">
                <tr className="p-5">
                  <th class="border-b text-left text-gray-500 font-normal border-gray-300 p-3">Date</th>
                  <th class="border-b text-left text-gray-500 font-normal border-gray-300 p-3">Description</th>
                  <th class="border-b text-left text-gray-500 font-normal border-gray-300 p-3">Category</th>
                  <th class="border-b text-left text-gray-500 font-normal border-gray-300 p-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {Expense.map((exp) => (
                  <tr className="px-3">
                    <td class="border-b text-xs font-normal text-left border-gray-300 p-3">Indiana</td>
                    <td class="border-b text-xs font-normal text-left border-gray-300 p-3">{exp.description}</td>
                    <td class="border-b text-xs font-normal text-left border-gray-300 p-3">{exp.category_id}</td>
                    <td class="border-b text-xs font-normal text-left border-gray-300 p-3">{exp.amount}Fcfa</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
