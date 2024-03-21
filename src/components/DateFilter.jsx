// Component to filter date columns in the table

import { useState } from "react";
import dayjs from "dayjs";

const DateFilter = ({ table, filterLabel }) => {
  // Get the min and max date values for the column
  const getMinMaxDate = table.getColumn(filterLabel).getFacetedMinMaxValues();

  // Set the initial state of the date filter
  const [startDateValue, setStartDateValue] = useState(getMinMaxDate[0]);
  const [endDateValue, setEndDateValue] = useState(getMinMaxDate[1]);

  // Function to check if the date is valid
  function isValidDate(d) {
    const parsedDate = new Date(d);
    return parsedDate instanceof Date && !Number.isNaN(parsedDate);
  }

  // Function to handle the change in the start date
  function handleStartDateChange(value) {
    if (isValidDate(value) && value !== "" && value !== "Invalid Date") {
      setStartDateValue(value.target.value);
      table
        .getColumn(filterLabel)
        .setFilterValue(() => [new Date(value.target.value), endDateValue]);
    }
  }

  // Function to handle the change in the end date
  function handleEndDateChange(value) {
    if (isValidDate(value) && value !== "" && value !== "Invalid Date")
      setEndDateValue(value.target.value);
    table
      .getColumn(filterLabel)
      .setFilterValue(() => [startDateValue, new Date(value.target.value)]);
  }

  return (
    <div className="my-7">
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {filterLabel.charAt(0).toUpperCase() + filterLabel.slice(1)}
      </label>
      <div className="flex space-x-5">
        <input
          name="startDate"
          type="date"
          onChange={handleStartDateChange}
          value={
            startDateValue ? dayjs(startDateValue).format("YYYY-MM-DD") : ""
          }
          className="w-full p-2 border-2 border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
        <input
          name="endDate"
          type="date"
          onChange={handleEndDateChange}
          value={endDateValue ? dayjs(endDateValue).format("YYYY-MM-DD") : ""}
          className="w-full p-2 border-2 border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default DateFilter;
