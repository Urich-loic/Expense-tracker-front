import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState();
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send formData to your backend API
    // For example, using fetch or axios to make a POST request

    const res = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setToken(data.token);
    localStorage.setItem("token", data.token);
    console.log(data);
    navigate("/");
  };

  return (
    <>
      <div className="container w-100 flex flex-col justify-center align-center bg">
        <div className="p-5 bg-white rounded-2xl shadow-2xl w-100 max-w-md mx-auto">
          <h1 className="text-black text-center font-bold text-3xl mb-5">
            Register user {localStorage.getItem("token")}
          </h1>
          <form onSubmit={handleSubmit} action="">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                className="border-2 rounded-2xl border-blue-700 p-3 w-[100%]"
                placeholder="Name"
                onChange={handleChange}
                value={(formData && formData.name) || ""} // Handle controlled input
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className="border-2 rounded-2xl border-blue-700 p-3 w-[100%]"
                placeholder="Email"
                onChange={handleChange}
                value={(formData && formData.email) || ""}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                className="border-2 rounded-2xl border-blue-700 p-3 w-[100%]"
                placeholder="Password"
                onChange={handleChange}
                value={(formData && formData.password) || ""}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password_confirmation"
                className="border-2 rounded-2xl border-blue-700 p-3 w-[100%] "
                placeholder="Password confirmation"
                onChange={handleChange}
                value={(formData && formData.password_confirmation) || ""}
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 w-[100%] hover:bg-amber-300 hover:text-black rounded-xl shadow-2xl shadow-black"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
