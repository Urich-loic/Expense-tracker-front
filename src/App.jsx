import "./App.css";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Support from "./pages/Support";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import Expenses from "./pages/Expenses";
function App() {
  const { user } = useContext(AppContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={user ? <Dashboard /> : <Login />} />
            <Route path="/expenses" element={user ? <Expenses /> : <Login />} />
            <Route path="/about" element={user ? <About /> : <Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/support" element={<Support />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
