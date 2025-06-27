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
      <div className="bg-gray-300 p-14  min-h-screen flex justify-center align-middle">
        <div className="w-[65vw] bg-white shadow-2xl rounded-2xl p-5 flex justify-between">
          <nav className="flex bg-gray-200 rounded-2xl flex-col justify-start items-start p-5 w-[25%]">
            <span className="mb-5">
              <Link to="/">Expenses Tracker</Link>
            </span>
            {user ? (
              <div className="flex flex-col justify-start align-baseline space-y-5">
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
              <div className="flex flex-col space-y-7">
                <Link to="support">Support</Link>
                <Link to="register">Register</Link>
                <Link to="login">Login</Link>
              </div>
            )}
          </nav>
          <main className="p-4 flex w-[100%]">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
