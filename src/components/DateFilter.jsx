import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DateFilter = ({ table, filterLabel }) => {
  const getMinMaxDate = table.getColumn(filterLabel).getFacetedMinMaxValues();

  console.log(getMinMaxDate);

  const [value, setValue] = useState({
    startDate: getMinMaxDate[0],
    endDate: getMinMaxDate[1],
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
    table
      .getColumn(filterLabel)
      ?.setFilterValue([newValue.startDate, newValue.endDate]);
  };

  return <Datepicker value={value} onChange={handleValueChange} />;
};

export default DateFilter;
