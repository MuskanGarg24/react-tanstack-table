// ColumnVisibility.jsx is a component that allows users to show/hide columns in the table.

const ColumnVisibility = ({ table }) => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-lg mb-9">Show/Hide Columns</h1>
      {table.getAllLeafColumns().map((column) => (
        <div
          key={column.id}
          className="border-2 border-gray-100 mb-3 p-3 rounded-lg"
        >
          <label className="flex justify-between">
            {column.columnDef.header}
            <input
              type="checkbox"
              className="w-4 h-4 rounded-xl"
              checked={column.getIsVisible()}
              onChange={column.getToggleVisibilityHandler()}
            />{" "}
          </label>
        </div>
      ))}
      <div className="mt-7">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg w-full"
          onClick={table.getToggleAllColumnsVisibilityHandler()}
        >
          Show All Columns
        </button>
      </div>
    </div>
  );
};

export default ColumnVisibility;
