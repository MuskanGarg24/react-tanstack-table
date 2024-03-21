// Multiselect dropdown filter component for category and subcategory columns

import { useState } from "react";

const MultiSelectDropdownFilter = ({ table, filterLabel }) => {
  // Get the unique values for the column
  const facetedItems = table.getColumn(filterLabel).getFacetedUniqueValues();

  // Convert the unique values to options array
  let options = [];
  facetedItems.forEach((value, key) => {
    options.push({ value: key, label: value });
  });

  // State to store the selected options
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Function to handle the change event of the select element
  const handleSelectChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
  };

  return (
    <div className="my-5">
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {filterLabel.charAt(0).toUpperCase() + filterLabel.slice(1)}
      </label>
      <select
        multiple
        className="block w-full rounded-md p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none"
        value={table.getColumn(filterLabel)?.getFilterValue() || []}
        onChange={(e) => {
          table.getColumn(filterLabel)?.setFilterValue(e.target.value);
        }}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MultiSelectDropdownFilter;
