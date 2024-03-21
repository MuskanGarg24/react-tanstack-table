// Grouping component for grouping the table data based on a column

import { useState } from "react";

const Grouping = ({ table, toggleSidebar }) => {
  // State to store the selected column id
  const [selectedColumnId, setSelectedColumnId] = useState("");

  // Function to apply grouping
  const applyGrouping = () => {
    if (selectedColumnId) {
      const column = table.getColumn(selectedColumnId);
      if (column) {
        column.toggleGrouping();
        toggleSidebar();
      }
    }
  };

  // Function to clear grouping
  const clearGrouping = () => {
    table.resetGrouping();
    toggleSidebar();
  };

  return (
    <div className="p-5">
      <h1 className="font-bold text-lg mb-9">Create Groups</h1>
      <div className="my-5">
        <select
          className="w-full p-3 border-2 border-gray-100 rounded-lg outline:none focus:outline-none"
          value={selectedColumnId}
          onChange={(e) => setSelectedColumnId(e.target.value)}
        >
          <option>Select a Column</option>
          {table.getAllLeafColumns().map((column) => {
            if (
              column.columnDef.header === "Category" ||
              column.columnDef.header === "Subcategory"
            ) {
              return (
                <option key={column.id} value={column.id}>
                  {column.columnDef.header}
                </option>
              );
            }
          })}
        </select>
      </div>
      <div>
        <button
          className="bg-white text-blue-500 border-2 border-blue-500 px-4 py-3 rounded-lg w-full mb-5 hover:bg-blue-500 hover:text-white transition duration-300"
          onClick={applyGrouping}
        >
          Apply Grouping
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-3 rounded-lg w-full"
          onClick={clearGrouping}
        >
          Clear Grouping
        </button>
      </div>
    </div>
  );
};

export default Grouping;
