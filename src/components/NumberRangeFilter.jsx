import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

const NumberRangeFilter = ({ table, filterLabel }) => {
  const minMaxFacetedItem = table
    .getColumn(filterLabel)
    .getFacetedMinMaxValues();

  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <>
      <MultiRangeSlider
        min={minMaxFacetedItem[0]}
        max={minMaxFacetedItem[1]}
        step={1}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
        onChange={(e) => {
          table.getColumn(filterLabel)?.setFilterValue([minValue, e.maxValue]);
        }}
      />
    </>
  );
};

export default NumberRangeFilter;
