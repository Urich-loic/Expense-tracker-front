
import { AppContext } from "../Context/AppContext";

export default function Expenses() {
  
const {Expenses} = useContext(AppContext);
  

  return (
    <div className="w-[80vw]">
      <table class="border-collapse border border-gray-400 ...">
        <thead>
          <tr>
            <th class="border border-gray-300 ...">State</th>
            <th class="border border-gray-300 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 ...">Indiana</td>
            <td class="border border-gray-300 ...">Indianapolis</td>
          </tr>
          <tr>
            <td class="border border-gray-300 ...">Ohio</td>
            <td class="border border-gray-300 ...">Columbus</td>
          </tr>
          <tr>
            <td class="border border-gray-300 ...">Michigan</td>
            <td class="border border-gray-300 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
