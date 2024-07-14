import { useState } from "react";
import "./App.css";
import { data } from "./data/Data";

function App() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(item =>
    item.first_name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <>
      <div>
        <div className="flex justify-center items-center py-12 ">
          <input
            type="text"
            name="search"
            placeholder="search by First Name"
            className="bg-white py-4 px-2 rounded-lg w-full max-w-[800px] outline-none  hover:outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center items-center bg-white w-full max-w-[800px] mx-auto rounded ">
        <table className="table-auto w-full text-left ">
          <thead>
            <tr>
              <th className="px-4 py-2 border">First name</th>
              <th className="px-4 py-2 border">Last name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={item.id}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <td className="px-4 py-2 border">{item.first_name}</td>
                <td className="px-4 py-2 border">{item.last_name}</td>
                <td className="px-4 py-2 border">{item.email}</td>
                <td className="px-4 py-2 border">{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
