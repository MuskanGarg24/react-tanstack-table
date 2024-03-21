// NameFilter component to filter the name column in the table

const NameFilter = ({ table }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900">Name</label>
      <div className="mt-2">
        <input
          type="text"
          className="block w-full rounded-md p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none focus:ring-blue-500 focus:border-blue-500 "
          value={table.getColumn("name")?.getFilterValue() || ""}
          onChange={(e) => {
            table.getColumn("name")?.setFilterValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default NameFilter;
