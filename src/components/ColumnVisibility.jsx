import React from "react";

const ColumnVisibility = ({ table }) => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-lg mb-9">Show/Hide Columns</h1>
      <div className="border-2 border-gray-100 my-3 p-3 rounded-lg">
        <label className="flex justify-between">
          Select All Columns
          <input
            type="checkbox"
            className="w-4 h-4 rounded-xl"
            checked={table.getIsAllColumnsVisible()}
            onChange={table.getToggleAllColumnsVisibilityHandler()}
          />{" "}
        </label>
      </div>
      {table.getAllLeafColumns().map((column) => (
        <div
          key={column.id}
          className="border-2 border-gray-100 mb-3 p-3 rounded-lg"
        >
          <label className="flex justify-between">
            {column.id}
            <input
              type="checkbox"
              className="w-4 h-4 rounded-xl"
              checked={column.getIsVisible()}
              onChange={column.getToggleVisibilityHandler()}
            />{" "}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ColumnVisibility;
