import { useState } from "react";

const Grouping = ({ table, toggleSidebar }) => {
  const [selectedColumnId, setSelectedColumnId] = useState("");

  const handleColumnSelect = (event) => {
    setSelectedColumnId(event.target.value);
  };

  const applyGrouping = () => {
    if (selectedColumnId) {
      const column = table.getColumn(selectedColumnId);
      if (column) {
        column.toggleGrouping();
        toggleSidebar();
      }
    }
  };

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
          onChange={handleColumnSelect}
        >
          <option>Select a column</option>
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
          className="bg-blue-500 text-white px-4 py-3 rounded-lg w-full mb-5"
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
