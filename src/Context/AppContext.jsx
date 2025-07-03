import { createContext, useEffect } from "react";
import { useState } from "react";
export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [Token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [category, setCategory] = useState(null);
  const [Expense, setExpense] = useState([]);
  const [chart, setChart] = useState({});
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  async function getUser() {
    const res = await fetch("http://127.0.0.1:8000/api/user", {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    const data = await res.json();
    setUser(data);
    console.log(data);
  }

  async function getCategories() {
    const res = await fetch("http://127.0.0.1:8000/api/category", {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    const data = await res.json();
    setCategory(data);
    console.log(data);
  }

  const getExpenses = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/expense");
    const data = await res.json();

    setExpense(data);
 
    // setChart({
    //   labels: daysInMonth.map(day => `June ${day}`),
    //       datasets: [{
    //         label: 'Revenue',
    //         data: data.amount,
    //         borderColor: 'rgba(75,192,192,1)',
    //       }]
    // })
  };



  useEffect(() => {
    getExpenses();
  }, [Expense]);

  useEffect(() => {
    if (Token) {
      getUser();
    }
  }, [Token]);

  useEffect(() => {
    if (Token) {
      getCategories();
    }
  }, [Token]);

  return (
    <AppContext.Provider value={{ category, chart, Expense, setExpense, Token, setToken, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
