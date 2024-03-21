// NumberRangeFilter Component to filter the price and sale_price columns in the table

import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

const NumberRangeFilter = ({ table, filterLabel }) => {
  // Get the minimum and maximum values for the column
  const minMaxFacetedItem = table
    .getColumn(filterLabel)
    .getFacetedMinMaxValues();

  // Set the initial minimum and maximum values for the slider
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div className="my-9">
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {filterLabel.charAt(0).toUpperCase() + filterLabel.slice(1)}
      </label>
      <MultiRangeSlider
        min={minMaxFacetedItem[0]}
        max={minMaxFacetedItem[1]}
        step={1}
        minValue={minValue}
        maxValue={maxValue}
        ruler={false}
        onInput={(e) => {
          handleInput(e);
        }}
        onChange={(e) => {
          table
            .getColumn(filterLabel)
            ?.setFilterValue([e.minValue, e.maxValue]);
        }}
        style={{ border: "none", boxShadow: "none", padding: "10px 15px" }}
        barInnerColor="#3b82f6"
        barLeftColor="#fffff"
        barRightColor="#fffff"
      />
    </div>
  );
};

export default NumberRangeFilter;
