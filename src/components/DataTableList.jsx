

export default function DataTableList({Expense}) {
  return (
    <table className="table-auto w-full p-7 border-0">
      <thead className="bg-gray-300 rounded">
        <tr className="p-5 rounded">
          <th className="border-b text-left text-gray-500 font-normal border-gray-300 p-3">
            Date
          </th>
          <th className="border-b text-left text-gray-500 font-normal border-gray-300 p-3">
            Description
          </th>
          <th className="border-b text-left text-gray-500 font-normal border-gray-300 p-3">
            Category
          </th>
          <th className="border-b text-left text-gray-500 font-normal border-gray-300 p-3">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {Expense.map((exp, index) => (
          <tr className="px-3 rounded" key={index}>
            <td className="border-b text-xs font-normal text-left border-gray-300 p-3">
              Indiana
            </td>
            <td className="border-b text-xs font-normal text-left border-gray-300 p-3">
              {exp.description}
            </td>
            <td className="border-b text-xs font-normal text-left border-gray-300 p-3">
              {exp.category_id}
            </td>
            <td className="border-b text-xs font-normal text-left border-gray-300 p-3">
              {exp.amount}Fcfa
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
