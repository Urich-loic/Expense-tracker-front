import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

export default function ExpensesForm({ setStatus, status }) {
  const [formData, setFormData] = useState();
  const { category, Token } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    const res = await fetch("http://127.0.0.1:8000/api/expense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    if (data) {
      setTimeout(() => {
        setStatus(!status);
      }, 3000);
    }

    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="bg-white/80 backdrop-blur-mg absolute top-0 bottom-0 left-0 right-0">
        <div className="bg-white max-w-[30vw] py-10 px-5 shadow-2xl absolute top-[50%] left-[50%] translate-[-50%] rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">Add revenue</h2>
          <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="w-100">
              <input
                type="text"
                name="title"
                id=""
                placeholder="Expense"
                className="flex grow-1/2 border-2 rounded-xl border-blue-500 p-2 w-[100%]"
                onChange={handleChange}
                value={(formData && formData.title) || ""}
              />
            </div>
            <div className="w-full">
              <select
                name="category_id"
                id=""
                onChange={handleChange}
                className="border-2 rounded-xl border-blue-500 p-3 w-[100%]"
              >
                <option value="Select a category 5">Select a category</option>
                {category.map((cat, index) => (
                  <option key={index} value={cat.id}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <textarea
                name="description"
                id=""
                placeholder="Description"
                className="border-2 rounded-xl border-blue-500 p-2 w-[100%]"
                onChange={handleChange}
                value={(formData && formData.description) || ""}
              ></textarea>
            </div>
            <div className="w-100">
              <input
                type="number"
                name="amount"
                id=""
                placeholder="Amount"
                className="border-2 rounded-xl border-blue-500 p-2 w-[100%]"
                onChange={handleChange}
                value={(formData && formData.amount) || ""}
              />
            </div>

            <div className="w-100">
              <button
                type="submit"
                className="bg-blue-500 text-white text-l py-2 px-5 rounded hover:bg-blue-500 hover:cursor-pointer rounded-xl"
              >
                Add revenue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
