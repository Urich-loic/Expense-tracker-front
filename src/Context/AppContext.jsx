import { createContext, useEffect } from "react";
import { useState } from "react";
export const AppContext = createContext();

export default function AppProvider({ children }) {

    const [Token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);

     async function getUser(){
        const res = await fetch("http://127.0.0.1:8000/api/user",{
            headers:{
                Authorization:`Bearer ${Token}`,
            },
        });
        const data = await res.json();
        setUser(data);
        console.log(data);
     }

     useEffect(()=>{if(Token){getUser()}},[Token]);

  return (
    <AppContext.Provider value={{ Token, setToken, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
