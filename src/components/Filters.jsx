// Filters component to display filters for the table

import NameFilter from "./NameFilter";
import MultiSelectDropdownFilter from "./MultiSelectDropdownFilter";
import NumberRangeFilter from "./NumberRangeFilter";
import DateFilter from "./DateFilter";

const Filters = ({ table, toggleSidebar }) => {
  // Function to clear all filters
  const clearFilters = () => {
    table.resetColumnFilters();
    toggleSidebar();
  };

  return (
    <div className="p-5">
      <h1 className="font-bold text-lg mb-9">Filters</h1>
      <div className="my-5">
        <NameFilter table={table} />
        <MultiSelectDropdownFilter table={table} filterLabel="category" />
        <MultiSelectDropdownFilter table={table} filterLabel="subcategory" />
        <NumberRangeFilter table={table} filterLabel="price" />
        <NumberRangeFilter table={table} filterLabel="sale_price" />
        <DateFilter table={table} filterLabel="createdAt" />
        <DateFilter table={table} filterLabel="updatedAt" />
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
