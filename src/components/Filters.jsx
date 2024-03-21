import React from "react";
import MultiSelectDropdownFilter from "./MultiSelectDropdownFilter";

const Filters = ({ table, toggleSidebar }) => {
  const clearFilters = () => {
    table.resetColumnFilters();
    toggleSidebar();
  };

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
        <div className="my-5">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Category
          </label>
          <MultiSelectDropdownFilter table={table} filterLabel="category" />
        </div>
        <div className="my-5">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Subcategory
          </label>
          <MultiSelectDropdownFilter table={table} filterLabel="subcategory" />
        </div>
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-3 rounded-lg w-full"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
