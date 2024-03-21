import React from "react";

const Filters = ({ table, toggleSidebar }) => {
  console.log(table);

  return (
    <div className="p-5">
      <h1 className="font-bold text-lg mb-9">Filters</h1>
      <div className="my-5">
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              className="block w-full rounded-md p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
              value={table.getColumn("name")?.getFilterValue() || ""}
              onChange={(e) => {
                table.getColumn("name")?.setFilterValue(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-3 rounded-lg w-full">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
