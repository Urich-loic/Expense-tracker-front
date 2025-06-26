import { Outlet, Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function Layout() {
  const { user, Token } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/api/logout", {
      method: "post",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });

    navigate("/login");
  };
  return (
    <>
      <header className="bg-blue-700 text-white p-4 shadow-md">
        <nav className="flex justify-between items-center ">
          <span>
            <Link to="/">Expenses Tracker</Link>
          </span>
          {user ? (
            <div className="flex space-x-4">
              {user && <Link to="/">Dashboard</Link>}
              {user && <Link to="/expenses">Expenses</Link>}
              {user && <Link to="/about">About</Link>}

              <Link to="support">Support</Link>
              {user && (
                <form onSubmit={handleLogout}>
                  <button type="submit">Logout</button>
                </form>
              )}
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link to="support">Support</Link>
              <Link to="register">Register</Link>
              <Link to="login">Login</Link>
            </div>
          )}
        </nav>
      </header>
      <main className="p-4 min-h-screen flex justify-center items-center">
        <Outlet />
      </main>
    </>
  );
}
