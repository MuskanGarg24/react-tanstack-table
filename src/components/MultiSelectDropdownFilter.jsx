import { useState } from "react";

const MultiSelectDropdownFilter = ({ table, filterLabel }) => {
  const facetedItems = table.getColumn(filterLabel).getFacetedUniqueValues();

  let options = [];

  facetedItems.forEach((value, key) => {
    options.push({ value: key, label: value });
  });

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
  };

  return (
    <div>
      <select
        multiple
        className="block w-full rounded-md p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
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
